# Judou Sans
句读黑体 / 句讀黑體 / 𛆘𛋧𛋚𛋒 / 句読ゴシック / 구두 고딕

**Judou Sans**, a multilingual open-source typeface based on Source Han Sans, FiraGO and more.

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
  - `Judou Sans`: Using the double-storey `g`, the open-top variant `4` and proportional figures
  - `Judou Sans UI`: Using the single-storey `g`, the closed-top variant `4` and tabular figures

- Orthography dimension
  - `Hans`: Chinese GB orthography
  - `Hant`: Chinese Inherited orthography
  - `Jpan`: Japanese orthography
  - `Kore`: Korean orthography

## To build

You need [Node.js](https://nodejs.org/) (version 20 or newer), [AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) and [ttfautohint](https://www.freetype.org/ttfautohint) installed, then run:

```bash
npm install
```

after the NPM packages are installed, run

```bash
npm run build ttf-u
```

to build the unhinted TTF files, it would be in `out/ttf-unhinted` directory.

To build unhinted TTC, type

```bash
npm run build ttc-u
```

instead, the files would be in `out/ttc-unhinted` directory.

To build unhinted Super TTC, type

```bash
npm run build super-ttc-u
```

instead, the files would be in `out/.super-ttc` directory.

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

To build hinted Super TTC, type

```bash
npm run build super-ttc
```

instead, the files would be in `out/.super-ttc` directory.

Please note that you will need *a lot of* memory to create TTCs, due to the huge quantity of subfamily-orthography combinations.

## Thanks to

Judou Sans is based on

- [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic) (for building the typeface)
- [Source Han Sans](https://github.com/adobe-fonts/source-han-sans) (for CJK)
- [Advocate Ancient Sans](https://github.com/GuiWonder/SourceHanToClassic) (for CJK in the `Hant` version)
- [FiraGO](https://github.com/bBoxType/FiraGO) (for LGC, IPA, Arabic, Devanagari, Georgian, Hebrew and Thai)
- [Noto Traditional Nushu](https://github.com/notofonts/nushu) (for Nüshu)
- [KhaWa Betsugs Sans](https://github.com/Keedizhang/UmeSansBeta) (for Tibetan)
- [Iosevka](https://github.com/be5invis/Iosevka) (for glyphs from Symbols for Legacy Computing)

                        
## Stargazers over time
[![Stargazers over time](https://starchart.cc/JudouEco/JudouSans.svg?variant=adaptive)](https://starchart.cc/JudouEco/JudouSans)