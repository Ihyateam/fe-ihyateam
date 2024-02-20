import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	return {
		isAdmin: locals.pb?.authStore.model?.isAdmin
	};
}

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const res = Object.fromEntries(data);
		const currentUser = locals.pb?.authStore.model?.id;

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
					.create({ photo, created_by: currentUser });

				await locals.pb
					?.collection('users')
					.update(currentUser, { ...payload, photo_id: photo_record?.id });
			} else {
				await locals.pb?.collection('users').update(currentUser, payload);
			}
		} catch (e) {
			console.log('something went wrong', e);
		}

		throw redirect(304, '/profile');
	}
};
