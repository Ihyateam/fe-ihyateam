import type { UserEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }): Promise<{
	current_user?: UserEntity;
}> {
	if (!locals.pb?.authStore.model?.isAdmin) {
		error(402, 'You are not allowed to view this page');
	}
	return {
		current_user: await locals.pb?.collection('users').getOne(params.id, { expand: 'photo_id' })
	};
}
