export async function load({ locals }) {
	return {
		tasks: await locals.pb?.collection('tasks').getFullList()
	};
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		console.log(Object.fromEntries(data));
		// locals.pb?.collection('tasks').create(Object.fromEntries(data));
	}
};
