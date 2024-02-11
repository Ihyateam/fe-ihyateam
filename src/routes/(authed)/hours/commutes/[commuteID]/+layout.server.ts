import type { TaskEntity } from '$lib/types.js';

export async function load({ params, locals }) {
	return {
		commute: await locals.pb?.collection('commute').getOne<TaskEntity>(params.commuteID)
	};
}
