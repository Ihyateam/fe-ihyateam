import type { ActivityEntity, CityEntity, WageEntity } from '$lib/types.js';
import { error } from '@sveltejs/kit';
import { load as activitiesLoader } from '../../../../../activities/[activity_id]/+page.server.js';

export async function load({ locals, params }) {
	const { users } = await activitiesLoader({ locals, params });

	const { activity_id } = params;
	const activity = await locals.pb
		?.collection('activity')
		.getOne<ActivityEntity>(activity_id, { expand: 'created_by,photo_id,city_id,wage_id' });

	if (!activity) {
		error(404, { message: 'Activity not found' });
	}

	return {
		users,
		activity,
		wages: await locals.pb?.collection('wage').getFullList<WageEntity>(),
		cities: await locals.pb?.collection('city').getFullList<CityEntity>()
	};
}
