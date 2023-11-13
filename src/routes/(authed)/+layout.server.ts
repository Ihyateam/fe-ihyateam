import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	if (!locals.pb?.authStore.isValid || !locals.pb?.authStore.model) {
		throw redirect(303, '/login?redirect=' + url.pathname);
	} else {
		const url = locals.pb?.files.getUrl(
			locals.pb.authStore.model,
			locals.pb.authStore.model.photo,
			{ thumb: '50x50' }
		);

		return {
			profile: { user: locals.pb.authStore.model, url }
		};
	}
}
