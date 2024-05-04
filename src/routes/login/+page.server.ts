import { fail, redirect } from '@sveltejs/kit';

export async function load({ locals: { pb } }) {
	if (pb?.authStore.isValid) {
		redirect(307, '/');
	}
}

export const actions = {
	default: async ({ request, locals: { pb }, url }) => {
		const targetUrl = url.searchParams.get('redirect') || '/';
		const loginData = Object.fromEntries(await request.formData()) as {
			username: string;
			password: string;
		};

		try {
			if (!pb?.authStore.isValid) {
				await pb?.collection('users').authWithPassword(loginData.username, loginData.password);
			}
		} catch (err) {
			console.error(err);
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
