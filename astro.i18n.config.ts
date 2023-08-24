import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["de", "es", "fr", "it", "ja", "ko", "nl", "pt-BR", "uk", "pt", "zh-Hans", "zh-Hant"],
	showDefaultLangCode: false,
	translations: {
		"de": "src/translations/de.json",
		"en": "src/translations/en.json",
		"es": "src/translations/es.json",
		"fr": "src/translations/fr.json",
		"it": "src/translations/it.json",
		"ja": "src/translations/ja.json",
		"ko": "src/translations/ko.json",
		"nl": "src/translations/nl.json",
		"pt-BR": "src/translations/pt-BR.json",
		"uk": "src/translations/uk.json",
		"pt": "src/translations/pt.json",
		"zh-Hans": "src/translations/zh-Hans.json",
		"zh-Hant": "src/translations/zh-Hant.json"
	},
	routeTranslations: {},
})