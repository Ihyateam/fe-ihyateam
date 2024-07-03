import { fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();

		if (!locals.pb?.authStore.model?.id) {
			return fail(404, {
				message: 'failed to create a new user'
			});
		}

		const res = {
			...Object.fromEntries(data),
			isAdmin: data.get('isAdmin') === 'on',
			created_by: locals.pb?.authStore.model.id,
			emailVisibility: true
		};

		try {
			const record = await locals.pb?.collection('users').create(res);
			return {
				record
			};
		} catch (e) {
			console.error(e);
			return fail(404, {
				message: 'failed to create a new user'
			});
		}
	}
};
