import type { UserEntity } from '$lib/types.js';
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
		locals.pb.authStore.model.photo = url;

		const user: UserEntity = locals.pb.authStore.model as UserEntity;

		return {
			user
		};
	}
}
