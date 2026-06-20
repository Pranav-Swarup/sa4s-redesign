import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve, join } from 'path';
import type { Plugin, ViteDevServer } from 'vite';

export interface SpotlightItem {
  date: string;
  title: string;
  tag: string;
  preview: string;
  content: string;
  link: string;
  image: string;
  homepage: boolean;
}

const VIRTUAL_ID = 'virtual:spotlight';
const RESOLVED_ID = '\0virtual:spotlight';

function parseFields(text: string): Record<string, string> {
  const fields: Record<string, string> = {};
  const lines = text.split('\n');
  let key = '';
  const acc: string[] = [];

  const flush = () => {
    if (key) fields[key] = acc.join('\n').trim();
  };

  for (const line of lines) {
    const m = line.match(/^\[([A-Z]+)\]\s*(.*)/);
    if (m) {
      flush();
      key = m[1];
      acc.length = 0;
      acc.push(m[2]);
    } else if (key) {
      acc.push(line);
    }
  }
  flush();
  return fields;
}

function parseSpotlightFile(filename: string, text: string): SpotlightItem | null {
  const f = parseFields(text);
  if (!f.TITLE) return null;

  const date = filename.replace(/\.txt$/, '');

  const preview =
    f.PREVIEW ||
    (f.CONTENT ? f.CONTENT.replace(/\n/g, ' ').slice(0, 150).trimEnd() : '');

  const rawImage = f.IMAGE || '';
  const image = rawImage.startsWith('/') ? rawImage : rawImage ? `/images/spotlight/${rawImage}` : '';

  return {
    date,
    title: f.TITLE,
    tag: f.TAG || '',
    preview,
    content: f.CONTENT || '',
    link: f.LINK || '#',
    image,
    homepage: 'HOMEPAGE' in f,
  };
}

function loadSpotlightItems(root: string): SpotlightItem[] {
  const dir = join(root, 'public', 'spotlight');
  if (!existsSync(dir)) return [];

  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.txt'))
    .sort()
    .reverse(); // newest first, no slice — load all

  return files
    .map((f) => {
      try {
        const text = readFileSync(join(dir, f), 'utf-8');
        return parseSpotlightFile(f, text);
      } catch {
        return null;
      }
    })
    .filter((x): x is SpotlightItem => x !== null);
}

export function spotlightPlugin(): Plugin {
  let root = process.cwd();

  return {
    name: 'vite-plugin-spotlight',

    configResolved(config) {
      root = config.root;
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
    },

    load(id) {
      if (id !== RESOLVED_ID) return;
      const items = loadSpotlightItems(root);
      return `export default ${JSON.stringify(items, null, 2)}`;
    },

    configureServer(server: ViteDevServer) {
      const watchDir = resolve(root, 'public', 'spotlight');
      server.watcher.add(watchDir);

      server.watcher.on('add', invalidate);
      server.watcher.on('change', invalidate);
      server.watcher.on('unlink', invalidate);

      function invalidate(file: string) {
        if (!file.includes(join('public', 'spotlight'))) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.hot.send({ type: 'full-reload' });
      }
    },
  };
}
