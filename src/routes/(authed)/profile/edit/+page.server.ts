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

		const photo = data.get('photo');
		if (photo) {
			data.delete('photo');
		}

		const payload = {
			...res,
			isAdmin: res.isAdmin === 'on',
			verified: res.verified === 'on',
			emailVisibility: true
		};

		try {
			const photo_record = await locals.pb
				?.collection('photo')
				.create({ photo, created_by: currentUser });

			await locals.pb
				?.collection('users')
				.update(currentUser, { ...payload, photo_id: photo_record?.id });
		} catch (e) {
			console.log('something went wrong', e);
		}

		throw redirect(304, '/profile');
	}
};
