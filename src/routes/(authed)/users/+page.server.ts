import type { UserEntity } from '$lib/types.js';

export async function load({ locals }): Promise<{ volunteers?: UserEntity[] }> {
	return {
		volunteers: await locals.pb?.collection('users').getFullList()
	};
}
