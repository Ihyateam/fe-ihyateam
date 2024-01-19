import type { CommuteEntity, TaskEntity, UserEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }): Promise<{
	current_user: UserEntity;
	efforts: TaskEntity[];
	commutes: CommuteEntity[];
}> {
	if (!locals.pb?.authStore.model?.isAdmin) {
		error(402, 'You are not allowed to view this page');
	}

	let efforts = (await locals.pb?.collection('effort').getFullList()) as any[];
	let commutes = (await locals.pb?.collection('commute').getFullList()) as any[];

	efforts = efforts.filter((effort) => effort.user_id === params.id);
	commutes = commutes.filter((effort) => effort.user_id === params.id);
	return {
		current_user: await locals.pb?.collection('users').getOne(params.id, { expand: 'photo_id' }),
		commutes,
		efforts
	};
}
