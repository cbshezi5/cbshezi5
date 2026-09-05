import { build } from 'esbuild';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import { readFile, writeFile, mkdir, copyFile, cp } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
// `pages/` is reserved by Vinext/Next routing: never put browser bundles there.
const out = resolve(root, 'github-pages');
await mkdir(out, { recursive: true });
await mkdir(resolve(root, 'work'), { recursive: true });
const bundle = resolve(root, 'work/pages-render.mjs');
await build({ absWorkingDir: root, entryPoints: [resolve(root, 'app/page.tsx')], outfile: bundle, bundle: true, packages: 'external', platform: 'node', format: 'esm', jsx: 'automatic' });
await writeFile(resolve(root, 'work/pages-client.tsx'), `import React from 'react';import {hydrateRoot} from 'react-dom/client';import Page from '../app/page';hydrateRoot(document.getElementById('portfolio-root')!, <Page />);`);
await build({ absWorkingDir: root, entryPoints: [resolve(root, 'work/pages-client.tsx')], outfile: resolve(out, 'app.js'), bundle: true, platform: 'browser', format: 'esm', jsx: 'automatic', minify: true, define: { 'process.env.NODE_ENV': '"production"' } });
const { default: Page } = await import(pathToFileURL(bundle).href + '?v=' + Date.now());
const { createElement } = await import('react');
const { renderToString } = await import('react-dom/server');
const markup = renderToString(createElement(Page));const cssPath = resolve(root, 'app/globals.css');
const css = await postcss([tailwindcss()]).process(await readFile(cssPath, 'utf8'), { from: cssPath, to: resolve(out, 'styles.css') });
await writeFile(resolve(out, 'styles.css'), css.css + '\n:root{--font-geist-sans:Arial;--font-geist-mono:Consolas}\n');
const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Cebolenkosi Shezi | Software Engineer</title><meta name="description" content="Software engineer working across fintech, Tazama fraud management, operational monitoring and mobile products."><link rel="canonical" href="https://cbshezi5.github.io/"><link rel="icon" href="./favicon.svg"><link rel="stylesheet" href="./styles.css"></head><body><div id="portfolio-root">${markup.replaceAll('href="/Cebolenkosi-Shezi-Resume.pdf"', 'href="./Cebolenkosi-Shezi-Resume.pdf"')}</div><script type="module" src="./app.js"></script></body></html>`;
await writeFile(resolve(out, 'index.html'), html);
await writeFile(resolve(out, '.nojekyll'), '');
for (const asset of ['Cebolenkosi-Shezi-Resume.pdf', 'favicon.svg']) await copyFile(resolve(root, 'public', asset), resolve(out, asset));
console.log('GitHub Pages output: github-pages/');


await cp(resolve(root, 'public/passion'), resolve(out, 'passion'), { recursive: true });
