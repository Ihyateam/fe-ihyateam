import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals }) => {
		locals.pb?.authStore.clear();
		redirect(303, '/login');
	}
};
