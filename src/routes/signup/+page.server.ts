import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	if (locals.security.isAlreadyAuthenticated()) {
		redirect(303, '/');
	}
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData().then((formData) => Object.fromEntries(formData));
		console.log(data);
	}
};
