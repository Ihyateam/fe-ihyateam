import type { CommuteEntity, TaskEntity } from '$lib/types.js';

export async function load({ locals, parent }) {
	locals.security.isAuthenticated();

	const { user } = await parent();

	return {
		efforts: await locals.pb
			?.collection('effort')
			.getFullList<TaskEntity>({ filter: `user_id ~ "${user.id}"` }),
		commutes: await locals.pb
			?.collection('commute')
			.getFullList<CommuteEntity>({ filter: `user_id ~ "${user.id}"` })
	};
}
