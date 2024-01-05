import { redirect } from '@sveltejs/kit';

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

		const res: {
			failed?: boolean;
			error?: boolean;
			err?: { message: string; reference_code: number };
		} = {};

		try {
			await locals.pb?.collection('users').authWithPassword(loginData.username, loginData.password);

			redirect(303, targetUrl);
		} catch ({ originalError }) {
			res['err'] =
				originalError instanceof TypeError
					? {
							reference_code: 500,
							message:
								'Oops! something has gone wrong in the server please contact the administrator of the page'
					  }
					: {
							reference_code: 404,
							message: 'You were not autherized please try again!'
					  };
			res['error'] = originalError instanceof TypeError;
			res['failed'] = true;
		}
		return res;
	}
};
