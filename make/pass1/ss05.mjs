import createFinder from "../common/glyph-finder.mjs";

export const toSS05 = function (font) {
	const find = createFinder(font);
	for (let c in font.cmap) {
		if (!font.cmap[c]) continue;
		font.cmap[c] = find.gname.subst("ss05", font.cmap[c]);
	}
};
