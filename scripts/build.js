// "build": "esbuild src/index.js --bundle --outfile=out.js"

import * as esbuild from 'esbuild'

await esbuild
  .build({
    entryPoints: ['index.js'],
    bundle: true,
    outfile: 'out/extension.cjs',
    minify: false,
    sourcemap: false,
    platform: 'node',
    target: ['node10.4'],
    format: 'cjs',
    // format: 'esm',
    external: ['./node_modules/*', 'vscode', 'axios', 'highlight.js'],
    chunkNames: 'chunks/[name]-[hash]'
    // outdir: 'out'
    // outExtension: { '.js': '.cjs' }
    // splitting: true
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
