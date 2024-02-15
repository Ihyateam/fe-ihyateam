import type { CommuteEntity } from '$lib/types.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params, locals }) {
	const commute = await locals.pb?.collection('commute').getOne<CommuteEntity>(params.commuteID);
	if (!commute) {
		redirect(307, '/hours');
	}

	return {
		commute
	};
}
