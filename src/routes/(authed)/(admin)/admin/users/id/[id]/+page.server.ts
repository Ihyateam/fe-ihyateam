import type { ActivityEntity, CommuteEntity, TaskEntity, UserEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }): Promise<{
	current_user: UserEntity;
	efforts: TaskEntity[];
	commutes: CommuteEntity[];
	activities: ActivityEntity[];
}> {
	if (locals.pb?.authStore.model?.isAdmin || locals.pb?.authStore.model?.id === params.id) {
		const efforts = await locals.pb
			?.collection('effort')
			.getFullList({ filter: `user_id ~ "${params.id}"` });

		const commutes = await locals.pb
			?.collection('commute')
			.getFullList({ filter: `user_id ~ "${params.id}"` });

		const activities = await locals.pb
			?.collection('activity_users')
			.getFullList({ filter: `user_id ~ "${params.id}"` });

		return {
			current_user: await locals.pb?.collection('users').getOne(params.id, { expand: 'photo_id' }),
			commutes,
			efforts,
			activities
		};
	} else {
		error(402, 'You are not allowed to view this page');
	}
}
