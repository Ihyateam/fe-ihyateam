import type { ActivityEntity, UserEntity } from '$lib/types.js';

export async function load({
	params,
	locals
}): Promise<{ user?: UserEntity; activities?: ActivityEntity[] }> {
	return {
		user: await locals.pb?.collection('users').getOne(params.id),
		activities: await locals.pb?.collection('activities').getFullList()
	};
}
