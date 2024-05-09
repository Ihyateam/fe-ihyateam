import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
import { parseAcceptLanguageHeader } from '$lib/server';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(env.PRIVATE_POCKETBASE_HOST);
	event.locals.lang = parseAcceptLanguageHeader(event.request.headers.get('Accept-Language'));

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	try {
		event.locals.pb.authStore.isValid &&
			(await event.locals.pb.collection('users').authRefresh({ expand: 'photo_id' }));
	} catch (_) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ httpOnly: false, secure: false })
	);
	return response;
}
