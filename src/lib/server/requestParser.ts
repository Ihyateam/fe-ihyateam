import type { AcceptLang } from '$lib/types';

export function parseAcceptLanguageHeader(acceptLanguage: string | null): AcceptLang {
	if (!acceptLanguage) return 'ar';

	const match = ['ar', 'en', 'de'].find((lang) =>
		acceptLanguage.match(new RegExp(lang))
	) as AcceptLang;

	return match ?? 'ar';
}
