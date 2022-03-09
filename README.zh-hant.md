# 句讀黑體

基於更紗黑體、思源黑體、秋空黑體和 FiraGO 的中日韓無襯線字型。

## 構建字型

您需要安裝 [Node.js](https://nodejs.org/en/) （12 版以及更新）、[otfcc](https://github.com/caryll/otfcc)、[AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) 以及 [ttfautohint](https://www.freetype.org/ttfautohint)，然後在終端輸入

```bash
npm install
```

在所有 NPM 包都安裝之後，輸入

```bash
npm run build ttf
```

來構建包含字型微調技術的 TTF 格式字型檔案，這些檔案將會儲存在 `out/ttf` 目錄。

如果想構建包含字型微調技術的 TTC 格式字型檔案，請輸入

```bash
npm run build ttc
```

這些檔案將會儲存在 `out/ttc` 目錄。順帶一提，構建包含字型微調技術的字型檔案需要**很長**時間。

如果想構建**不含**字型微調技術的 TTF 格式字型檔案（通常會更快），請輸入

```bash
npm run build ttfu
```

這些檔案將會儲存在 `out/ttf-unhinted` 目錄。

如果想構建**不含**字型微調技術的 TTC 格式字型檔案（通常會更快），請輸入

```bash
npm run build ttcu
```

這些檔案將會儲存在 `out/ttc-unhinted` 目錄。

請注意，由於各個地區的寫法組合的數量巨大，您將需要*大量*的記憶體來構建 TTC 格式字型檔案。

## 名字的含義
- 按照字型劃分
  - `CN`, `JP`, `KR`: 中日韓字型。
  - `TC`: [秋空黑體「現代筆形印刷體字形版本」](https://github.com/ChiuMing-Neko/ChiuKongGothic#%E7%8F%BE%E4%BB%A3%E7%AD%86%E5%BD%A2%E5%8D%B0%E5%88%B7%E9%AB%94%E5%AD%97%E5%BD%A2%E7%89%88%E6%9C%ACmn)。