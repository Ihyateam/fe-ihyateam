import PocketBase from 'pocketbase';
import { POCKETBASE_HOST } from '$env/static/private';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(POCKETBASE_HOST);

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	try {
		event.locals.pb.authStore.isValid && (await event.locals.pb.collection('admins').authRefresh());
	} catch (_) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
	return response;
}
