# Judou Sans
句读黑体 / 句讀黑體 / 𛆘𛋥𛋚𛋒 / Judou ゴシック / Judou 고딕

**Judou Sans** is a multilingual open-source typeface based on [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic), [Source Han Sans](https://github.com/adobe-fonts/source-han-sans), [Advocate Ancient Sans](https://github.com/GuiWonder/SourceHanToClassic), [Noto Traditional Nushu](https://github.com/notofonts/NotoTraditionalNushu), [KhaWa Sans](https://github.com/Keedizhang/UmeSansBeta) and [FiraGO](https://github.com/bBoxType/FiraGO).

## Script support

- CJK Ideographic
- Hangul
- Kana
- Nüshu
- Tibetan
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

- Style dimension
  - `Judou Sans`: Quotes (`“` `”`) are full width, with the double-storey `g`, the open-top variant `4` and proportional figures
  - `Judou Sans UI`: Quotes (`“` `”`) are narrow, with the single-storey `g`, the closed-top variant `4` and tabular figures

- Orthography dimension
  - `Hans`: Chinese GB orthography
  - `Hant`: Chinese Inherited orthography
  - `Jpan`: Japanese orthography
  - `Kore`: Korean orthography

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
