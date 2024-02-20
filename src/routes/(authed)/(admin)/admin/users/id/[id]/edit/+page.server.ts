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
		const data = await request.formData();
		const res = Object.fromEntries(data);

		const currentUser = params.id;
		const user = locals.pb?.authStore.model?.id;

		const payload = {
			...res,
			isAdmin: res.isAdmin === 'on',
			verified: res.verified === 'on',
			emailVisibility: true
		};

		try {
			const photo = data.get('photo') as File;

			if (photo.size) {
				const photo = data.get('photo');
				const photo_record = await locals.pb
					?.collection('photo')
					.create({ photo, created_by: user });

				await locals.pb
					?.collection('users')
					.update(currentUser, { ...payload, photo_id: photo_record?.id });
			} else {
				await locals.pb?.collection('users').update(currentUser, payload);
			}
		} catch (e) {
			console.log('something went wrong', e);
		}

		throw redirect(304, `/admin/users/id/${params.id}`);
	}
};
