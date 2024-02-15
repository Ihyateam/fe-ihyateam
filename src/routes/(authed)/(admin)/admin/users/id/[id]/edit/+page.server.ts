import type { UserEntity } from '$lib/types';
import { redirect } from '@sveltejs/kit';

export async function load({ locals, params }) {
	const isAdmin = locals.pb?.authStore.model?.isAdmin;

	const current_user = await locals.pb
		?.collection('users')
		.getOne<UserEntity>(params.id, { expand: 'photo_id' });

	return {
		isAdmin,
		current_user
	};
}

export const actions = {
	default: async ({ request, locals, params }) => {
		const data = await request.formData().then((formData) => Object.fromEntries(formData));
		const toUpdateUser = params.id;
		const user = await locals.pb?.collection('users').getOne(toUpdateUser);
		const payload = {
			...user,
			...data,
			isAdmin: data.isAdmin === 'on',
			verified: data.verified === 'on',
			emailVisibility: true
		};
		await locals.pb?.collection('users').update(toUpdateUser, payload);
		throw redirect(304, `/admin/users/id/${params.id}`);
	}
};
