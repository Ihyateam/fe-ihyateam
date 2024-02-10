export async function load({ params, locals }) {
	return {
		task: await locals.pb?.collection('effort').getOne(params.taskID)
	};
}
