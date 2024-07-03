import { Security } from '$lib/security';
import PocketBase from 'pocketbase';
import { PRIVATE_POCKETBASE_HOST } from '$env/static/private';
import { parseAcceptLanguageHeader } from '$lib/server';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(PRIVATE_POCKETBASE_HOST);
	event.locals.lang = parseAcceptLanguageHeader(event.request.headers.get('Accept-Language'));

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		event.locals.pb.authStore.isValid || (await event.locals.pb.collection('users').authRefresh());
	} catch (_) {
		event.locals.pb.authStore.clear();
	}

	event.locals.security = new Security(event);

	const response = await resolve(event);

	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ httpOnly: false, secure: false })
	);

	return response;
}
