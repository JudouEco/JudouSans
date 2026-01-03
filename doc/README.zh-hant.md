# 句讀黑體
句读黑体 / 𛆘𛋧𛋚𛋒 / Judou Sans / 句読ゴシック / 구두 고딕

**句讀黑體**，基於思源黑體和 FiraGO 等字型，開源的多文種混排字型。

## 支持的文字

- 漢字
- 假名
- 諺文
- 女書
- 藏文
- 拉丁文擴展
- 西里爾文擴展 (包含塞爾維亞語和保加利亞語的 Opentype `locl` 特性)
- 希臘文擴展
- 國際音標
- 阿拉伯文
- 天城文
- 格魯吉亞文
- 希伯來文
- 泰文

## 字型名稱解讀

- 按照風格劃分
  - `句讀黑體`: 使用雙層 `g`、開放字懷 `4` 和不等寬數字
  - `句讀黑體 UI`: 使用單層 `g`、封閉字懷 `4` 和等寬數字

- 按照字形劃分
  - `Hans`: 國標字形
  - `Hant`: 傳承字形
  - `Jpan`: 日本字形
  - `Kore`: 韓國字形

## 構建字型

您需要安裝 [Node.js](https://nodejs.org/) （20 版以及更新）、[AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) 以及 [ttfautohint](https://www.freetype.org/ttfautohint)，然後在終端輸入

```bash
npm install
```

在所有 NPM 包都安裝之後，輸入

```bash
npm run build ttf-u
```

來構建**不含**字型微調技術的 TTF 格式字型檔案，這些檔案將會儲存在 `out/ttf-unhinted` 目錄。

如果想構建**不含**字型微調技術的 TTC 格式字型檔案，請輸入

```bash
npm run build ttc-u
```

這些檔案將會儲存在 `out/ttc-unhinted` 目錄。

如果想構建**不含**字型微調技術的 Super TTC 格式字型檔案，請輸入

```bash
npm run build super-ttc-u
```

這些檔案將會儲存在 `out/.super-ttc` 目錄。

如果想構建**包含**字型微調技術的 TTF 格式字型檔案，請輸入

```bash
npm run build ttf
```

這些檔案將會儲存在 `out/ttf` 目錄。構建包含字型微調技術的字型檔案需要**很長**時間。

如果想構建**包含**字型微調技術的 TTC 格式字型檔案，請輸入

```bash
npm run build ttc
```

這些檔案將會儲存在 `out/ttc` 目錄。

如果想構建**包含**字型微調技術的 Super TTC 格式字型檔案，請輸入

```bash
npm run build super-ttc
```

這些檔案將會儲存在 `out/.super-ttc` 目錄。

請注意，由於各地字型組合的數量巨大，您將需要*大量*的記憶體來構建 TTC 格式字型檔案。

## 鳴謝

本字型基於以下字型：

- [更紗黑體](https://github.com/be5invis/Sarasa-Gothic)（構建字型）
- [思源黑體](https://github.com/adobe-fonts/source-han-sans)（CJK 部分）
- [尙古黑體](https://github.com/GuiWonder/SourceHanToClassic)（`Hant` 版本 CJK 部分）
- [FiraGO](https://github.com/bBoxType/FiraGO)（西文、國際音標、阿拉伯文、天城文、格魯吉亞文、希伯來文、泰文）
- [Noto Traditional Nushu](https://github.com/notofonts/nushu)（女書）
- [卡瓦柏簇無襯綫體](https://github.com/Keedizhang/UmeSansBeta)（藏文）
- [Iosevka](https://github.com/be5invis/Iosevka)（傳統資訊處理技術符號）

## 摘星記錄
[![Stargazers over time](https://starchart.cc/JudouEco/JudouSans.svg?background=%23242424&axis=%23cccccc&line=%238ec5e9)](https://starchart.cc/JudouEco/JudouSans)