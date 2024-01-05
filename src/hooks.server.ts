import PocketBase from 'pocketbase';
import { POCKETBASE_DB } from '$env/static/private';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(POCKETBASE_DB);

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
