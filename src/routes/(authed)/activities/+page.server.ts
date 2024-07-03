import type { ActivityEntity } from '$lib/types.js';

export async function load({ locals }): Promise<{ activities?: ActivityEntity[] }> {
	locals.security.isAuthenticated();

	return {
		activities: await locals.pb?.collection('activity').getFullList({ expand: 'photo_id' })
	};
}
