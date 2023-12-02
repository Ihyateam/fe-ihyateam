import type { UserEntity } from '$lib/types.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }): Promise<{ user: UserEntity }> {
	if (!locals.pb?.authStore.isValid || !locals.pb?.authStore.model) {
		throw redirect(303, '/login?redirect=' + url.pathname);
	}

	return {
		user: locals.pb.authStore.model as UserEntity
	};
}
