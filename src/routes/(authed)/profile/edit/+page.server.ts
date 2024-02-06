import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (_) => {
		throw redirect(301, '/profile');
	}
};
