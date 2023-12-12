import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	return {
		tasks: await locals.pb?.collection('tasks').getFullList()
	};
}

export const actions = {
	create: async ({ request, locals, params }) => {
		if (params.id !== locals.pb?.authStore?.model?.user.id) {
			throw error(403, 'Forbidden');
		}
		const data = await request.formData();
		locals.pb?.collection('tasks').create(Object.fromEntries(data));
	}
};
