import type { ExpandedActivityEntity } from '$lib/types.js';

export async function load({ params, locals }): Promise<{ activity: ExpandedActivityEntity }> {
	return {
		activity: (await locals.pb
			?.collection('activities')
			.getOne(params.id, { expand: 'volunteers' })) as ExpandedActivityEntity
	};
}
