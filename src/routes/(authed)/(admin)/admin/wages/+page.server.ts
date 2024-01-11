import type { WageEntity } from '$lib/types.js';

export async function load({ locals }): Promise<{ wages?: WageEntity[] }> {
	return {
		wages: await locals.pb?.collection('wage').getFullList({ expand: 'currency_id' })
	};
}
