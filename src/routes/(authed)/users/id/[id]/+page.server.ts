import type { ActivityEntity, UserEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({
	params,
	locals
}): Promise<{ user?: UserEntity; activities?: ActivityEntity[]; tasks?: any[]; url?: string }> {
	if (!locals.pb?.authStore.model?.isAdmin && locals.pb?.authStore?.model?.id !== params.id) {
		throw error(402, 'You are not allowed to view this page');
	}
	return {
		user: await locals.pb?.collection('users').getOne(params.id),
		activities: await locals.pb?.collection('activities').getFullList(),
		tasks: await locals.pb?.collection('tasks').getFullList()
		// .getFullList({ filter: 'id=ui9jkbouglfg7y6' })
	};
}
