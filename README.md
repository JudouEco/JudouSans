# Judou Sans
句读黑体 / 句讀黑體 / Judou ゴシック / Judou 고딕

[简体中文介绍](./README.zh-hans.md)
[繁體中文介紹](./README.zh-hant.md)

**Judou Sans**, a multilingual typeface based on [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic), [Source Han Sans](https://github.com/adobe-fonts/source-han-sans), [ChiuKong Gothic](https://github.com/ChiuMing-Neko/ChiuKongGothic), [Noto Traditional Nushu](https://github.com/notofonts/NotoTraditionalNushu) and [FiraGO](https://github.com/bBoxType/FiraGO).

## Script support

### From Source Han Sans / ChiuKong Gothic
- CJK Ideographic
- Hangul
- Kana
### From Noto Traditional Nushu
- Nüshu
### From FiraGO
- Latin Extended
- Cyrillic Extended (+ locl BGR and SRB)
- Polytonic Greek
- IPA
- Arabic
- Devanagari
- Georgian
- Hebrew
- Thai

## What are the names?

- Orthography dimension
  - `CN`: Chinese GB orthography.
  - `CL`: Chinese old orthography.
  - `JP`: Japanese orthography.
  - `KR`: Korean orthography.

## To build

You need [Node.js](https://nodejs.org/en/) (version 12 or newer), [otfcc](https://github.com/caryll/otfcc), [AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) and [ttfautohint](https://www.freetype.org/ttfautohint) installed, then run:

```bash
npm install
```

after the NPM packages are installed, run

```bash
npm run build ttfu
```

to build the unhinted TTF files, it would be in `out/ttf-unhinted` directory.

To build unhinted TTC, type

```bash
npm run build ttcu
```

instead, the files would be in `out/ttc-unhinted` directory.

To build hinted TTF, type

```bash
npm run build ttf
```

instead, the files would be in `out/ttf` directory.

To build hinted TTC, type

```bash
npm run build ttc
```

instead, the files would be in `out/ttc` directory.

Please note that you will need *a lot of* memory to create TTCs, due to the huge quantity of subfamily-orthography combinations.