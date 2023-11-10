import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	if (locals.pb?.authStore.isValid) {
		throw redirect(300, url.searchParams.get('redirect') || '/');
	}
}

export const actions = {
	default: async ({ request, locals, url }) => {
		const targetUrl = url.searchParams.get('redirect') || '/';
		const loginData = Object.fromEntries(await request.formData()) as {
			username: string;
			password: string;
		};

		const res: { failed?: boolean } = {};

		try {
			await locals.pb?.collection('users').authWithPassword(loginData.username, loginData.password);
			throw redirect(303, targetUrl);
		} catch (_) {
			res['failed'] = true;
		}
		return res;
	}
};
