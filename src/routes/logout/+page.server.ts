import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals, url }) => {
		try {
			locals.security.safelyClearAuth();
		} catch (e) {
			if (e instanceof Error) fail(500, { message: e.message });
			fail(500, { message: 'unknonwn error has occurred.' });
		}

		redirect(303, `/login?${url.searchParams.toString()}`);
	}
};
