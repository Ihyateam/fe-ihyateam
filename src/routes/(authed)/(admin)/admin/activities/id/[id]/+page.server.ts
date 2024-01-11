import type { ActivityEntity } from '$lib/types.js';

export async function load({ params, locals }): Promise<{ activity?: ActivityEntity }> {
	return {
		activity: await locals.pb?.collection('activity').getOne(params.id, { expand: 'volunteers' })
	};
}
