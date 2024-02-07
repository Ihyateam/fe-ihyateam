import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		locals.pb?.autoCancellation(true);
		const data = await request.formData().then((formData) => Object.fromEntries(formData));
		const toUpdateUser = locals.pb?.authStore.model?.id;
		const user = await locals.pb?.collection('users').getOne(toUpdateUser);
		const payload = { ...user, ...data, emailVisibility: true };
		console.log({ user, payload });
		const res = await locals.pb?.collection('users').update(toUpdateUser, payload);
		console.log({ res, payload });
		throw redirect(304, '/profile');
	}
};
