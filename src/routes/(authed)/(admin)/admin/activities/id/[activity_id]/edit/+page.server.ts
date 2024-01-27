import type { ActivityEntity, CityEntity, UserEntity, WageEntity } from '$lib/types.js';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { load as activitiesLoader } from '../../../../../../activities/[activity_id]/+page.server.js';

export async function load(request: ServerLoadEvent): Promise<{
	users?: UserEntity[];
	activity?: ActivityEntity;
	wages?: WageEntity[];
	cities?: CityEntity[];
}> {
	const { users } = await activitiesLoader(request);
	const { params, locals } = request;

	return {
		users,
		activity: await locals.pb
			?.collection('activity')
			.getOne(params.activity_id, { expand: 'created_by,photo_id,city_id,wage_id' }),
		wages: await locals.pb?.collection('wage').getFullList(),
		cities: await locals.pb?.collection('city').getFullList()
	};
}
