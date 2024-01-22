import type { ActivityEntity, UserEntity } from '$lib/types.js';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { load as activitiesLoader } from '../../../../../activities/[activity_id]/+page.server.js';

export async function load(
	request: ServerLoadEvent
): Promise<{ users?: UserEntity[]; activity: ActivityEntity }> {
	const { users } = await activitiesLoader(request);
	const { params, locals } = request;

	return {
		users,
		activity: (await locals.pb
			?.collection('activity')
			.getOne(params.activity_id, { expand: 'created_by,photo_id' })) as ActivityEntity
	};
}
