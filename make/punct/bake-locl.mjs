import { bakeFeature } from "../helpers/bake-feature.mjs";

export function bakeLocalization(font, flags) {
	if (flags.mono || flags.term || flags.pwid) return;

	let langTag = "JAN ";
	switch (flags.region) {
		case "Jpan":
			langTag = "JAN ";
			break;
		case "Kore":
			langTag = "KOR ";
			break;
		case "Hans":
			langTag = "ZHS ";
			break;
		case "Hant":
			langTag = "ZHH ";
			break;
	}

	bakeFeature("locl", font, c => c != 0x2010, "hani", langTag);
}
