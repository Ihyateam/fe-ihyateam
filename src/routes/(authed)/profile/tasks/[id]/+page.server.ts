export async function load({ params, locals }) {
	return {
		tasks: await locals.pb?.collection('tasks').getOne(params.id)
	};
}
