import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	if (!locals.pb?.authStore.isValid) {
		throw redirect(303, '/login?redirect=' + url.pathname);
	}
}
