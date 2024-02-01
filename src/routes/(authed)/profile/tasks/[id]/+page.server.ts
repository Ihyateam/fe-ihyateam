export async function load({ params, locals }) {
	return {
		task: await locals.pb?.collection('tasks').getOne(params.id)
	};
}
