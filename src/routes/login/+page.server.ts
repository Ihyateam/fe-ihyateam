import { fail, redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	if (locals.pb?.authStore.isValid) {
		redirect(300, url.searchParams.get('redirect') || '/');
	}
}

export const actions = {
	default: async ({ request, locals, url }) => {
		const targetUrl = url.searchParams.get('redirect') || '/';
		const loginData = Object.fromEntries(await request.formData()) as {
			username: string;
			password: string;
		};

		try {
			if (!locals.pb?.authStore.isValid) {
				await locals.pb
					?.collection('users')
					.authWithPassword(loginData.username, loginData.password);
			}
		} catch (err) {
			let status = 401;
			const res = { message: 'The password or username you entered is incorrect' };
			if (err?.status === 0) {
				res['message'] = 'An error occurred, please contact the administrator to solve the problem';
				status = 500;
			}
			return fail(status, res);
		}

		redirect(301, targetUrl);
	}
};
