import type { TaskEntity } from '$lib/types.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params, locals }) {
	const task = await locals.pb?.collection('effort').getOne<TaskEntity>(params.taskID);

	if (!task) {
		redirect(307, '/hours');
	}

	return {
		task
	};
}
