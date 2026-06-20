import{c as x,r as e,j as b}from"./index-Xd6vVd8m.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=x("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);function j({to:t,duration:r=1500,className:u}){const[m,p]=e.useState(0),n=e.useRef(null),s=e.useRef(!1);return e.useEffect(()=>{const o=n.current;if(!o)return;const c=new IntersectionObserver(f=>{if(f[0].isIntersecting&&!s.current){s.current=!0;const d=performance.now(),a=l=>{const i=Math.min(1,(l-d)/r),h=1-Math.pow(1-i,3);p(Math.round(h*t)),i<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}},{threshold:.3});return c.observe(o),()=>c.disconnect()},[t,r]),b.jsx("span",{ref:n,className:u,children:m})}export{j as C,C as a};
