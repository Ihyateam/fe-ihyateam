import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	if (!locals.pb?.authStore.isValid || !locals.pb?.authStore.model) {
		throw redirect(303, '/login?redirect=' + url.pathname);
	} else {
		return {
			user: locals.pb.authStore.model
		};
	}
}
