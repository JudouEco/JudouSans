import createFinder from "../common/glyph-finder.mjs";

export const toSS06 = function (font) {
	const find = createFinder(font);
	for (let c in font.cmap) {
		if (!font.cmap[c]) continue;
		font.cmap[c] = find.gname.subst("ss06", font.cmap[c]);
	}
};
