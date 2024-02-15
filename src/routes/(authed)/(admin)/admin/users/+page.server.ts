import type { UserEntity } from '$lib/types.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const user = locals.pb?.authStore.model;
	if (!user?.isAdmin) redirect(303, '/');

	const users = await locals.pb
		?.collection('users')
		.getFullList<UserEntity>({ expand: 'photo_id' });

	return {
		users
	};
}
