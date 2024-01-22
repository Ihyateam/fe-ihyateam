import type { UserEntity } from '$lib/types.js';

export async function load({ params, locals }): Promise<{ users?: UserEntity[] }> {
	const activites = await locals.pb
		?.collection('activity_users')
		.getFullList({ filter: `activity_id ~ '${params.activity_id}'`, expand: 'user_id.photo_id' });

	const users = activites.map((item) => item.expand.user_id);

	return {
		users
	};
}
