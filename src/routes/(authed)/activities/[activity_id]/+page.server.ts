import type { ExpandedActivityEntity } from '$lib/types.js';

export async function load({ params, locals }): Promise<{ activity: ExpandedActivityEntity }> {
	const activity = await locals.pb
		?.collection('activity_users')
		.getFullList({ filter: `activity_id ~ '${params.activity_id}'` });

	const users_id = activity?.map((item) => item.user_id);
	const users = (await locals.pb?.collection('users').getFullList({ expand: 'photo_id' }))?.filter(
		({ id }) => users_id?.includes(id)
	);

	console.log({ activity, users_id, users });

	return {
		activity,
		users
	};
}
