import validatorId from '$lib/server/validatorId.js';
import type { UserEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
	const activites = await locals.pb
		?.collection('activity_users')
		.getFullList<{ expand: { user_id: UserEntity } }>({
			filter: `activity_id ~ '${params.activity_id}'`,
			expand: 'user_id.photo_id'
		});

	if (activites?.length === 0 || !validatorId({ id: params.activity_id })) {
		error(404, {
			message: `لم يتم العثور على المورد المطلوب "${params.activity_id.toLocaleUpperCase()}"`
		});
	}

	const users = activites?.map((item) => item.expand.user_id);

	return {
		users
	};
}
