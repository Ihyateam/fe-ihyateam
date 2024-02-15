import type { ActivityEntity, CommuteEntity, TaskEntity, UserEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
	if (params.id.length !== 15) error(404, { message: 'لم يتم العثور على المستخدم' });

	if (locals.pb?.authStore.model?.isAdmin || locals.pb?.authStore.model?.id === params.id) {
		const current_user = await locals.pb
			?.collection('users')
			.getOne<UserEntity>(params.id, { expand: 'photo_id' });

		if (!current_user) error(404, { message: 'User not found' });

		return {
			current_user,
			commutes: await locals.pb
				?.collection('effort')
				.getFullList<TaskEntity>({ filter: `user_id ~ "${params.id}"` }),
			efforts: await locals.pb
				?.collection('commute')
				.getFullList<CommuteEntity>({ filter: `user_id ~ "${params.id}"` }),
			activities: await locals.pb
				?.collection('activity_users')
				.getFullList<ActivityEntity>({ filter: `user_id ~ "${params.id}"` })
		};
	}

	error(402, 'You are not allowed to view this page');
}
