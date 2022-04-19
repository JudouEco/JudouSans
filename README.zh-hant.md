# 句讀黑體
Judou Sans (tɕy toʊ ˈsænz) / 句读黑体 / Judou ゴシック / Judou 고딕

**句讀黑體**，支援多種語言文字的商用免費黑體，基於[更紗黑體](https://github.com/be5invis/Sarasa-Gothic)、[思源黑體](https://github.com/adobe-fonts/source-han-sans)、[秋空黑體](https://github.com/ChiuMing-Neko/ChiuKongGothic)、[Noto Traditional Nushu](https://github.com/notofonts/NotoTraditionalNushu) 和 [FiraGO](https://github.com/bBoxType/FiraGO)。

## 支持的文字

### 來自思源黑體 / 秋空黑體
- 漢字
- 假名
- 諺文
### 來自 Noto Traditional Nushu
- 女書
### 來自 FiraGO
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

- 按照字形劃分
  - `CN`: 中國新字形
  - `CL`: 中國舊字形
  - `JP`: 日本字形
  - `KR`: 韓國字形

## 構建字型

您需要安裝 [Node.js](https://nodejs.org/zh-tw/) （12 版以及更新）、[otfcc](https://github.com/caryll/otfcc)、[AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) 以及 [ttfautohint](https://www.freetype.org/ttfautohint)，然後在終端輸入

```bash
npm install
```

在所有 NPM 包都安裝之後，輸入

```bash
npm run build ttfu
```

來構建**不含**字型微調技術的 TTF 格式字型檔案，這些檔案將會儲存在 `out/ttf-unhinted` 目錄。

如果想構建**不含**字型微調技術的 TTC 格式字型檔案，請輸入

```bash
npm run build ttcu
```

這些檔案將會儲存在 `out/ttc-unhinted` 目錄。

如果想構建**包含**字型微調技術的 TTF 格式字型檔案，請輸入

```bash
npm run build ttf
```

這些檔案將會儲存在 `out/ttf` 目錄。順帶一提，構建包含字型微調技術的字型檔案需要**很長**時間。

如果想構建**包含**字型微調技術的 TTC 格式字型檔案，請輸入

```bash
npm run build ttc
```

這些檔案將會儲存在 `out/ttc` 目錄。

請注意，由於各地字型組合的數量巨大，您將需要*大量*的記憶體來構建 TTC 格式字型檔案。