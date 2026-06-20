/// <reference types="vite/client" />

declare module 'virtual:spotlight' {
  interface SpotlightItem {
    date: string;
    title: string;
    tag: string;
    preview: string;
    content: string;
    link: string;
    image: string;
    homepage: boolean;
  }
  const items: SpotlightItem[];
  export default items;
}
