# 句讀黑體

**句讀黑體**是一款基於[更紗黑體](https://github.com/be5invis/Sarasa-Gothic)、[思源黑體](https://github.com/adobe-fonts/source-han-sans)、[秋空黑體](https://github.com/ChiuMing-Neko/ChiuKongGothic)、[Noto Traditional Nushu](https://github.com/notofonts/NotoTraditionalNushu) 和 [FiraGO](https://github.com/bBoxType/FiraGO) 的中日韓無襯線字型。

## 支持的文字

- 阿拉伯文
- 漢字
- 西里爾文擴展 (+ locl BGR 和 SRB)
- 天城文
- 格魯吉亞文
- 諺文
- 希伯來文
- 國際音標
- 假名
- 拉丁文擴展
- 女書
- 希臘文擴展
- 泰文

## 名字的含義

- 按照字型劃分
  - `CN`: 中國新字形。
  - `CL`: 中國舊字形。
  - `JP`: 日本字形。
  - `KR`: 韓國字形。

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