import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (_req) => {
		throw redirect(301, '/profile');
	}
};
