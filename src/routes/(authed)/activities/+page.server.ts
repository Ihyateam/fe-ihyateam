import type { ActivityEntity } from '$lib/types.js';

export async function load({ locals }): Promise<{ activities: ActivityEntity[] }> {
	const enrollments = await locals.pb
		?.collection('activity_users')
		.getFullList({ filter: `user_id = '${locals.pb?.authStore?.model?.id}'` });
	const fullActivities = (await locals.pb
		?.collection('activity')
		.getFullList({ expand: 'photo_id' })) as ActivityEntity[];
	const activities = fullActivities?.filter((activity) =>
		enrollments?.map(({ activity_id }) => activity_id)?.includes(activity.id)
	);

	return {
		activities
	};
}
