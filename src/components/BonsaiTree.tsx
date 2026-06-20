
import { useEffect, useRef, type CSSProperties } from 'react';

// ─── Canvas grid config ────────────────────────────────────────────────────
// CHAR_WIDTH=1, CHAR_HEIGHT=2 (matches pybonsai's terminal aspect assumptions)
const COLS = 100;
const ROWS = 40;
const CHAR_W = 10;   // px per column
const CHAR_H = 20;   // px per row  (2× width, matching CHAR_HEIGHT=2)
const FONT_PX = 13;
const CHARS_PER_FRAME = 5;
const START_DELAY_MS = 400;

// Cream background rgb
const BG = [250, 247, 242] as const;

// Colors tuned for cream background
// Branches: warm brown  R:90-155  G:45-85  B:10-28
// Leaves:   forest green  R:~G*0.25  G:110-195  B:~G*0.25
// Pot:      clay   (138, 108, 68)
const BRANCH_COLOR: ColorRange = [[90, 140], [45, 70], [10, 25]];
const POT_RGB: RGB = [250, 247, 242];

const BRANCH_CHARS = '~;:=';
const LEAF_CHARS = '&%#*@';

// ─── Types ─────────────────────────────────────────────────────────────────
type RGB = [number, number, number];
type ColorRange = [[number, number], [number, number], [number, number]];
type ColorSpec = RGB | ColorRange;

interface Ev {
  row: number;
  col: number;
  char: string;
  r: number;
  g: number;
  b: number;
}

// ─── Seeded LCG PRNG ──────────────────────────────────────────────────────
class RNG {
  private s: number;
  constructor(seed: number) { this.s = seed >>> 0; }

  next() {
    this.s = (Math.imul(this.s, 1664525) + 1013904223) >>> 0;
    return this.s / 4294967296;
  }
  randInt(lo: number, hi: number) { return Math.floor(this.next() * (hi - lo + 1)) + lo; }
  randFloat(lo: number, hi: number) { return this.next() * (hi - lo) + lo; }
  normalvariate(mean: number, std: number) {
    const u1 = Math.max(1e-10, this.next()), u2 = this.next();
    return mean + std * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  }
  choice(s: string) { return s[Math.floor(this.next() * s.length)]; }
}

// ─── Line (port of utils.Line: y = m*x + c) ───────────────────────────────
class Line {
  m = 0; c = 0; isVertical = false;

  setEndPoints([x1, y1]: [number, number], [x2, y2]: [number, number]) {
    if (Math.abs(x1 - x2) < 1e-9) {
      this.isVertical = true; this.c = x1;
    } else {
      this.m = (y1 - y2) / (x1 - x2);
      this.c = y1 - this.m * x1;
    }
  }
  getY(x: number) { return this.m * x + this.c; }
  getX(y: number) {
    if (this.isVertical) return this.c;
    return Math.abs(this.m) > 1e-9 ? (y - this.c) / this.m : 0;
  }
  getTheta() { return this.isVertical ? Math.PI / 2 : Math.atan(this.m); }
}

// ─── Grid — coordinate conversion + event collector ───────────────────────
// Matches TerminalWindow.plane_to_screen / screen_to_plane exactly:
//   pts(x,y) → [row, col]  where  row = height - y/CHAR_HEIGHT,  col = x/CHAR_WIDTH
//   stp(row,col) → [x, y]  inverse
class Grid {
  events: Ev[] = [];
  constructor(public W: number, public H: number, public rng: RNG) {}

  // plane → screen
  pts(x: number, y: number): [number, number] {
    return [Math.round(this.H - y / 2), Math.round(x)];
  }
  // screen → plane
  stp(row: number, col: number): [number, number] {
    return [col, (this.H - row) * 2];
  }

  pickColor(spec: ColorSpec): RGB {
    if (typeof spec[0] === 'number') return spec as RGB;
    const [[r0, r1], [g0, g1], [b0, b1]] = spec as ColorRange;
    return [this.rng.randInt(r0, r1), this.rng.randInt(g0, g1), this.rng.randInt(b0, b1)];
  }

  put(row: number, col: number, char: string, r: number, g: number, b: number) {
    if (row < 0 || row >= this.H || col < 0 || col >= this.W) return;
    if (char === ' ') return; // space = natural gap, leave cream background
    this.events.push({ row, col, char, r, g, b });
  }

  // Chooses |, _, /, \ based on line angle (port of get_line_char)
  lineChar(theta: number) {
    const a = Math.abs(theta);
    if (a > Math.PI / 3) return '|';
    if (a < Math.PI / 6) return '_';
    return theta > 0 ? '/' : '\\';
  }

  // Port of draw_line → draw_steep_line / draw_shallow_line
  // Uses "N cells closest to midline" per row/col to draw width-N branches
  drawLine(
    start: [number, number], end: [number, number],
    color: ColorSpec, width: number
  ) {
    const line = new Line();
    line.setEndPoints(start, end);
    const baseChar = this.lineChar(line.getTheta());
    const w = Math.max(1, Math.round(width));

    const [sr, sc] = this.pts(...start);
    const [er, ec] = this.pts(...end);

    if (line.isVertical || Math.abs(line.m) >= 1) {
      // steep: iterate rows, find w-closest cols
      const r0 = Math.min(sr, er), r1 = Math.max(sr, er);
      for (let row = r0; row <= r1; row++) {
        const dists: [number, number][] = [];
        for (let col = 0; col < this.W; col++) {
          const [px, py] = this.stp(row, col);
          dists.push([Math.abs(line.getX(py) - px), col]);
        }
        dists.sort((a, b) => a[0] - b[0]);
        for (let i = 0; i < Math.min(w, dists.length); i++) {
          const ch = this.rng.next() < 0.3 ? this.rng.choice(BRANCH_CHARS) : baseChar;
          const [r, g, b] = this.pickColor(color);
          this.put(row, dists[i][1], ch, r, g, b);
        }
      }
    } else {
      // shallow: iterate cols, find w-closest rows
      const c0 = Math.min(sc, ec), c1 = Math.max(sc, ec);
      for (let col = c0; col <= c1; col++) {
        const dists: [number, number][] = [];
        for (let row = 0; row < this.H; row++) {
          const [px, py] = this.stp(row, col);
          dists.push([Math.abs(line.getY(px) - py), row]);
        }
        dists.sort((a, b) => a[0] - b[0]);
        for (let i = 0; i < Math.min(w, dists.length); i++) {
          const ch = this.rng.next() < 0.3 ? this.rng.choice(BRANCH_CHARS) : baseChar;
          const [r, g, b] = this.pickColor(color);
          this.put(dists[i][1], col, ch, r, g, b);
        }
      }
    }
  }
}

// ─── Leaves (port of tree.Leaves) ─────────────────────────────────────────
const LEAF_LEN = 3;

function drawLeaves(grid: Grid, px: number, py: number) {
  for (let l = 0; l < 3; l++) {
    let vx = grid.rng.randFloat(-1, 1);
    let vy = grid.rng.randFloat(-1, 1);
    const mag = Math.hypot(vx, vy) || 1;
    vx /= mag; vy /= mag;
    let x = px, y = py;

    for (let i = 0; i < LEAF_LEN; i++) {
      x += vx; y += vy;
      const g = grid.rng.randInt(110, 195);
      const rb = Math.floor(g * 0.24);
      const [row, col] = grid.pts(x, y);
      grid.put(row, col, grid.rng.choice(LEAF_CHARS), rb, g, rb);
      // gravity: pull vy downward
      vy -= (i / LEAF_LEN) * 0.3;
    }
  }
}

// ─── Branch recursion ─────────────────────────────────────────────────────
const ANG_STD = Math.PI / 180 * 10;
const LEN_SCALE = 0.75;
const NUM_LAYERS = 7;
const ANGLE_MEAN = Math.PI / 180 * 50;
const INIT_LEN = 14;

function endCoords(x: number, y: number, len: number, theta: number): [number, number] {
  return [x + len * Math.sin(theta), y + len * Math.cos(theta)];
}

function drawBranch(
  grid: Grid, x: number, y: number,
  layer: number, len: number, width: number, theta: number
) {
  if (layer >= NUM_LAYERS) {
    drawLeaves(grid, x, y);
    return;
  }

  const [ex, ey] = endCoords(x, y, len, theta);
  grid.drawLine([x, y], [ex, ey], BRANCH_COLOR, width);

  // All child branches sprout from the END — gives canopy-at-top silhouette
  const nb = Math.max(1, Math.round(grid.rng.normalvariate(2, 0.5)));
  const nw = Math.max(1, width - 1);
  const nl = len * LEN_SCALE;
  let sign = 1;

  for (let i = 0; i < nb; i++) {
    const nt = theta + sign * grid.rng.normalvariate(ANGLE_MEAN, ANG_STD);
    drawBranch(grid, ex, ey, layer + 1, nl, nw, nt);
    sign *= -1;
  }
}

// ─── Full tree generation ──────────────────────────────────────────────────
function generateTree(seed: number): Ev[] {
  const rng = new RNG(seed);
  const grid = new Grid(COLS, ROWS, rng);

  // Root offset right so tree spreads left toward center of screen
  // Center the tree within canvas so branches don't clip the right edge
  const rootX = Math.round(COLS * 0.48);
  const rootY = 10; // plane y; row = ROWS - rootY/2 = ROWS - 5

  // Simple pot (port of Tree.draw_box, simplified)
  
  const [potRow, potCol] = grid.pts(rootX, rootY - 8);
  const [pr, pg, pb] = POT_RGB;
  const pW = 9;
  for (let c = 0; c < pW; c++) {
    const col = potCol - Math.floor(pW / 2) + c;
    const rim = c === 0 ? '\\' : c === pW - 1 ? '/' : '_';
    grid.put(potRow, col, rim, pr, pg, pb);
    grid.put(potRow + 1, col, c === 0 || c === pW - 1 ? '|' : ' ', pr, pg, pb);
    if (potRow + 2 < grid.H) {
      const base = c === 0 ? '\\' : c === pW - 1 ? '/' : '_';
      grid.put(potRow + 2, col, base, pr, pg, pb);
    }
  }
  

  // ── Tall trunk: nearly vertical, slight natural sway ────────────────────
  const TRUNK_LEN = 24;
  const TRUNK_WIDTH = 4;
  const trunkSway = rng.normalvariate(0, Math.PI / 180 * 3);
  const [trunkTopX, trunkTopY] = endCoords(rootX, rootY, TRUNK_LEN, trunkSway);
  grid.drawLine([rootX, rootY], [trunkTopX, trunkTopY], BRANCH_COLOR, TRUNK_WIDTH);

  // ── Canopy: two main boughs fan out from trunk top ───────────────────────
  for (const sign of [-1, 1]) {
    const angle = trunkSway + sign * rng.normalvariate(ANGLE_MEAN, ANG_STD * 0.6);
    drawBranch(grid, trunkTopX, trunkTopY, 1, INIT_LEN, 3, angle);
  }

  return grid.events;
}

// ─── React component ───────────────────────────────────────────────────────
interface Props {
  className?: string;
  seed?: number;
  onClick?: () => void;
  style?: CSSProperties;
}

export default function BonsaiTree({ className = '', seed, onClick, style }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const timerRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = COLS * CHAR_W * dpr;
    canvas.height = ROWS * CHAR_H * dpr;

    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);
    ctx.font = `${FONT_PX}px "JetBrains Mono", monospace`;
    ctx.textBaseline = 'top';

    // Clear to cream
    const [br, bg, bb] = BG;
    ctx.fillStyle = `rgb(${br},${bg},${bb})`;
    ctx.fillRect(0, 0, COLS * CHAR_W, ROWS * CHAR_H);

    const events = generateTree(seed ?? Date.now());
    let tick = 0;

    function frame() {
      const end = Math.min(tick + CHARS_PER_FRAME, events.length);
      for (let i = tick; i < end; i++) {
        const { row, col, char, r, g, b } = events[i];
        const px = col * CHAR_W;
        const py = row * CHAR_H;
        // Erase cell to cream then draw char
        ctx.fillStyle = `rgb(${br},${bg},${bb})`;
        ctx.fillRect(px, py, CHAR_W, CHAR_H);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillText(char, px + 1, py + 3);
      }
      tick = end;
      if (tick < events.length) rafRef.current = requestAnimationFrame(frame);
    }

    timerRef.current = window.setTimeout(() => {
      rafRef.current = requestAnimationFrame(frame);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [seed]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: COLS * CHAR_W, height: ROWS * CHAR_H, pointerEvents: 'auto', cursor: onClick ? 'pointer' : 'default', ...style }}
      className={className}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}
