> [!CAUTION]
> 最近，包括本字体在内的众多商用免费字体被部分电商平台商家倒卖，该行为严重违反了[《SIL 开放字体许可证 (OFL)》1.1 版](https://openfontlicense.org/open-font-license-official-text/)“许可与条件 (PERMISSION & CONDITIONS)”第 1 条，**请勿购入**！否则，您所支付的钱财将不会流入字体作者手中，您也不会获得本字体的版本更新或其他支持。欢迎前往[此处](https://github.com/JudouEco/JudouSans/discussions)举报。

# 句读黑体
𛆘𛋧𛋚𛋒 / 句讀黑體 / Judou Sans / Judou ゴシック / Judou 고딕

[繁體中文](./README.zh-hant.md)
[English](./README.en.md)

**句读黑体**，基于思源黑体和 FiraGO 等字体，商用免费的多文种混排字体。

## 支持的文字

- 汉字
- 假名
- 谚文
- 女书
- 藏文
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

您需要安装 [Node.js](https://nodejs.org/) （20 版以及更新）、[AFDKO](http://www.adobe.com/devnet/opentype/afdko.html) 以及 [ttfautohint](https://www.freetype.org/ttfautohint)，然后在终端输入

```bash
npm install
```

在所有 NPM 包都安装之后，输入

```bash
npm run build ttf-u
```

来构建**不含**字体微调技术的 TTF 格式字体文件，这些文件将会保存在 `out/ttf-unhinted` 目录。

如果想构建**不含**字体微调技术的 TTC 格式字体文件，请输入

```bash
npm run build ttc-u
```

这些文件将会保存在 `out/ttc-unhinted` 目录。

如果想构建**不含**字体微调技术的 Super TTC 格式字体文件，请输入

```bash
npm run build super-ttc-u
```

这些文件将会保存在 `out/.super-ttc` 目录。

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

如果想构建**包含**字体微调技术的 Super TTC 格式字体文件，请输入

```bash
npm run build super-ttc
```

这些文件将会保存在 `out/.super-ttc` 目录。

请注意，由于各地字型组合的数量巨大，您将需要*大量*的内存来构建 TTC 格式字体文件。

## 鸣谢

本字体基于以下字体：

- [更纱黑体](https://github.com/be5invis/Sarasa-Gothic)（构建字体）
- [思源黑体](https://github.com/adobe-fonts/source-han-sans)（CJK 部分）
- [尙古黑体](https://github.com/GuiWonder/SourceHanToClassic)（`Hant` 版本 CJK 部分）
- [FiraGO](https://github.com/bBoxType/FiraGO)（西文、国际音标、阿拉伯文、天城文、格鲁吉亚文、希伯来文、泰文）
- [Noto Traditional Nushu](https://github.com/notofonts/nushu)（女书）
- [KhaWa Sans](https://github.com/Keedizhang/UmeSansBeta)（藏文）
- [Iosevka](https://github.com/be5invis/Iosevka)（传统信息处理技术符号）
- [Weather Icons](https://github.com/erikflowers/weather-icons)（私用区天气图标）

## Stargazers over time
[![Stargazers over time](https://starchart.cc/JudouEco/JudouSans.svg?variant=adaptive)](https://starchart.cc/JudouEco/JudouSans)
