export async function load({locals}) {
	return {
		msg: 'hello world',
        tasks: await locals.pb?.collection('tasks').getFullList()
	};
}
