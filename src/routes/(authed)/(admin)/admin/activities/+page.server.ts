import type { ActivityEntity } from '$lib/types.js';

export async function load({ locals }): Promise<{ activites?: ActivityEntity[] }> {
	return {
		activites: await locals?.pb?.collection('activity').getFullList({expand: 'photo_id'})
	};
}
