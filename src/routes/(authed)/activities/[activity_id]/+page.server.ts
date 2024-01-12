import type { UserEntity } from '$lib/types.js';
import { groupBy } from '$lib/utils/backend-utils.js';

export async function load({ params, locals }): Promise<{ users?: UserEntity[] }> {
	const activites = await locals.pb
		?.collection('activity_users')
		.getFullList({ filter: `activity_id ~ '${params.activity_id}'`, expand: 'user_id.photo_id' });

	const activities_groupby = groupBy(activites, ({ activity_id }) => activity_id);

	const users = activities_groupby[params.activity_id].map(({ expand }) => expand.user_id);

	return {
		users
	};
}
