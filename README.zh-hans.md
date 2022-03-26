# 句读黑体

**句读黑体**是一款基于[更纱黑体](https://github.com/be5invis/Sarasa-Gothic)、[思源黑体](https://github.com/adobe-fonts/source-han-sans)、[秋空黑体](https://github.com/ChiuMing-Neko/ChiuKongGothic)、[Noto Traditional Nushu](https://github.com/notofonts/NotoTraditionalNushu) 和 [FiraGO](https://github.com/bBoxType/FiraGO) 的中日韩无衬线字体。

## 支持的文字

- 阿拉伯文
- 汉字
- 西里尔文扩展 (+ locl BGR 和 SRB)
- 天城文
- 格鲁吉亚文
- 谚文
- 希伯来文
- 国际音标
- 假名
- 拉丁文扩展
- 女书
- 泛非洲文字
- 希腊文扩展
- 泰文

## 构建字体

您需要安装 [Node.js](https://nodejs.org/zh-cn/) （12 版以及更新）、[otfcc](https://github.com/caryll/otfcc)、[AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) 以及 [ttfautohint](https://www.freetype.org/ttfautohint)，然后在终端输入

```bash
npm install
```

在所有 NPM 包都安装之后，输入

```bash
npm run build ttfu
```

来构建**不含**字体微调技术的 TTF 格式字体文件，这些文件将会保存在 `out/ttf-unhinted` 目录。

如果想构建**不含**字体微调技术的 TTC 格式字体文件，请输入

```bash
npm run build ttcu
```

这些文件将会保存在 `out/ttc-unhinted` 目录。

如果想构建**包含**字体微调技术的 TTF 格式字体文件，请输入

```bash
npm run build ttf
```

这些文件将会保存在 `out/ttf` 目录。顺带一提，构建包含字体微调技术的字体文件需要**很长**时间。

如果想构建**包含**字体微调技术的 TTC 格式字体文件，请输入

```bash
npm run build ttc
```

这些文件将会保存在 `out/ttc` 目录。

请注意，由于各地字型组合的数量巨大，您将需要*大量*的内存来构建 TTC 格式字体文件。

## 名字的含义
- 按照字型划分
  - `CN`: 中国内地字形。
  - `TC`: [秋空黑体“现代笔形印刷体字形”](https://github.com/ChiuMing-Neko/ChiuKongGothic#%E7%8F%BE%E4%BB%A3%E7%AD%86%E5%BD%A2%E5%8D%B0%E5%88%B7%E9%AB%94%E5%AD%97%E5%BD%A2%E7%89%88%E6%9C%ACmn)。
  - `JP`: 日本字形。
  - `KR`: 韩国字形。