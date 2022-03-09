# Judou Sans (句读黑体 / 句讀黑體 / Judou ゴシック / Judou 고딕)

This is JUDOU SANS, a CJK font based on Sarasa Gothic, FiraGO and Source Han Sans.

## To build

You need [Node.js](https://nodejs.org/en/) (version 12 or newer), [otfcc](https://github.com/caryll/otfcc), [AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) and [ttfautohint](https://www.freetype.org/ttfautohint) installed, then run:

```bash
npm install
```

after the NPM packages are installed, run

```bash
npm run build ttf
```

to build the TTF files, it would be in `out/ttf` directory.

To build TTC, type

```bash
npm run build ttc
```

instead, the files would be in `out/ttc` directory.

To build unhinted TTF, type

```bash
npm run build ttfu
```

To build unhinted TTC, type

```bash
npm run build ttcu
```

Please note that you will need *a lot of* memory to create TTCs, due to the huge quantity of subfamily-orthography combinations.

## What are the names?
- Orthography dimension
  - `CN`, `JP`, `KR`: Regional orthography, following [Source Han Sans](https://github.com/adobe-fonts/source-han-sans) notations.
  - `TC`: ChiuKong Gothic M orthography