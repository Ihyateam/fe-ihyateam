import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	return {
		isAdmin: locals.pb?.authStore.model?.isAdmin
	};
}

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData().then((formData) => Object.fromEntries(formData));
		const toUpdateUser = locals.pb?.authStore.model?.id;
		const user = await locals.pb?.collection('users').getOne(toUpdateUser);
		const payload = { ...user, ...data, isAdmin: data.isAdmin === 'true', emailVisibility: true };
		console.log({ payload });
		await locals.pb?.collection('users').update(toUpdateUser, payload);
		throw redirect(304, '/profile');
	}
};
