import { redirect } from '@sveltejs/kit';

export async function load({ parent, params }) {
	const { task } = await parent();
	if (task.is_paid) {
		throw redirect(303, `/hours/tasks/${params.taskID}`);
	}
}
