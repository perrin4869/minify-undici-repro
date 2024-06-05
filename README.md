`minify` seems to struggle minifying `undici`.
`esbuild` and `terser` managed to minify it correctly.

These repo contains pre-minified versions of both. `main.min.js` was minified using `tdewolff/minify`, `main.terser.js` was minified with terser, `main.esbuild.js` was minified with `esbuild`.
`main.out.js` was bundled using `rollup`.

```
npx rollup -c rollup.config.js main.js > main.out.js
minify main.out.js > main.min.js
npx terser --compress --mangle -- main.out.js > main.terser.js
npx esbuild main.out.js --minify --platform=node --outfile=main.esbuild.js
```

We can then confirm that all versions produce the expected output, except for the one minified by `tdewolff/minify`.

```
    ~/nodejs/minify-undici-repro  on   master +7 !1  node main.js
{"foo":"barttt"}
^C
    ~/nodejs/minify-undici-repro  on   master +7 !1  node main.out.js
{"foo":"barttt"}
^C
    ~/nodejs/minify-undici-repro  on   master +7 !1  node main.terser.js
{"foo":"barttt"}
^C
    ~/nodejs/minify-undici-repro  on   master +7 !1  node main.esbuild.js
{"foo":"barttt"}
^C
    ~/nodejs/minify-undici-repro  on   master +7 !1  node main.min.js

^C
```
