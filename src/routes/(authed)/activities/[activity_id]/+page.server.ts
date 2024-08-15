import validatorId from '$lib/server/validatorId.js';
import type { UserEntity, ActivityEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
	let activity: ActivityEntity | undefined = undefined;
	let activities: { expand: { user_id: UserEntity } }[] | undefined = [];

	try {
		activity = await locals.pb?.collection('activity').getOne<ActivityEntity>(params.activity_id, {
			expand: 'created_by,photo_id,city_id,wage_id'
		});
		activities = await locals.pb
			?.collection('activity_volunteers')
			.getFullList<{ expand: { user_id: UserEntity } }>({
				filter: `activity_id ~ '${params.activity_id}'`,
				expand: 'user_id.photo_id'
			});
	} catch (e) {
		console.log('something went wrong', e);
	}

	if (!validatorId({ id: params.activity_id }) || !activity) {
		error(404, {
			message: `لم يتم العثور على المورد المطلوب "${params.activity_id.toLocaleUpperCase()}"`
		});
	}

	const users = activities?.map((item) => item.expand.user_id);

	return {
		activity,
		users
	};
}
