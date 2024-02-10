import type { TaskEntity } from '$lib/types.js';

export async function load({ params, locals }) {
	return {
		task: await locals.pb?.collection('effort').getOne<TaskEntity>(params.taskID)
	};
}
