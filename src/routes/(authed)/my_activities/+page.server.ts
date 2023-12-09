import type { ActivityEntity } from '$lib/types.js';

export async function load({ locals }): Promise<{ activities?: ActivityEntity[] }> {
	return {
		activities: await locals.pb?.collection('activities').getFullList()
	};
}
