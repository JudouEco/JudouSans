# 句读黑体
Judou Sans / 𛆘𛋥𛋚𛋒 / 句讀黑體 / Judou ゴシック / Judou 고딕

[繁體中文](./README.zh-hant.md)
[English](./README.en.md)

**句读黑体**，支持多种语言文字的商用免费黑体，基于[更纱黑体](https://github.com/be5invis/Sarasa-Gothic)、[思源黑体](https://github.com/adobe-fonts/source-han-sans)、[尙古黑体](https://github.com/GuiWonder/SourceHanToClassic)、[Noto Traditional Nushu](https://github.com/notofonts/NotoTraditionalNushu) 和 [FiraGO](https://github.com/bBoxType/FiraGO)。

## 支持的文字

### 来自思源黑体 / 秋空黑体
- 汉字
- 假名
- 谚文
### 来自 Noto Traditional Nushu
- 女书
### 来自 FiraGO
- 拉丁文扩展
- 西里尔文扩展 (包含塞尔维亚语和保加利亚语的 Opentype `locl` 特性)
- 希腊文扩展
- 国际音标
- 阿拉伯文
- 天城文
- 格鲁吉亚文
- 希伯来文
- 泰文

## 字体名称解读

- 按照风格划分
  - `句读黑体`: 使用占 1 个汉字宽的引号（`“` `”`）、双层 `g`、开放字怀 `4` 和不等宽数字
  - `句读黑体 UI`: 使用占半个汉字宽的引号（`“` `”`）、单层 `g`、封闭字怀 `4` 和等宽数字
  
- 按照字形划分
  - `Hans`: 国标字形
  - `Hant`: 传承字形
  - `Jpan`: 日本字形
  - `Kore`: 韩国字形

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
