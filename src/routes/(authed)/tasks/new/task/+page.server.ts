import type { ActivityEntity, UserEntity } from '$lib/types.js';

export async function load({ locals, parent }): Promise<{ activities: ActivityEntity[] }> {
	const { user } = await parent();
	const enrollments = await locals.pb
		?.collection('activity_users')
		.getFullList({ filter: `user_id = '${user.id}'` });
	const fullActivities = (await locals.pb
		?.collection('activity')
		.getFullList()) as ActivityEntity[];
	const activities = fullActivities?.filter((activity) =>
		enrollments?.map(({ activity_id }) => activity_id)?.includes(activity.id)
	);

	return {
		activities
	};
}

// "user_id": "RELATION_RECORD_ID",
// "activity_id": "RELATION_RECORD_ID",
// "is_paid": true,
// "effort_date": "2022-01-01 10:00:00.123Z",
// "payment_data": "2022-01-01 10:00:00.123Z",
// "hours": 123,
// "comment": "test"
export const actions = {
	default: async ({ request, locals }) => {
		const { id: user_id } = locals.pb?.authStore.model as UserEntity;
		const i = await request.formData();
		const data = { ...Object.fromEntries(i), is_paid: false, user_id };
		await locals.pb?.collection('effort').create(data);
	}
};
