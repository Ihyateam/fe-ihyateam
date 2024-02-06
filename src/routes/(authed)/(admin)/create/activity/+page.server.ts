import type { UserEntity } from '$lib/types.js';

export async function load({ locals }) {
	const volunteers = locals.pb?.collection('users').getFullList() as Promise<UserEntity[]>;
	const wages = locals.pb?.collection('wage').getFullList();
	const cities = locals.pb?.collection('city').getFullList();
	const status = {
		done: 'done',
		scheduled: 'scheduled',
		ongoing: 'ongoing',
		postponed: 'postponed'
	};

	return { volunteers: await volunteers, wages: await wages, cities: await cities, status };
}

export const actions = {
	createActivity: async ({ request, locals }) => {
		const data = await request.formData();
		data.append('created_by', locals.pb?.authStore.model?.id);
		data.append('created_at', new Date().toISOString());
		const photo = data.get('photo_id');
		const volunteerIDs = data.getAll('volunteers');

		if (data.has('volunteers')) {
			data.delete('volunteers');
		}

		if (data.has('photo_id')) {
			data.delete('photo_id');
		}

		console.log({
			...Object.fromEntries(data)
		});

		try {
			const photo_record = await locals.pb?.collection('photo').create({ photo });

			const activity_record = await locals.pb?.collection('activity').create({
				...Object.fromEntries(data),
				photo_id: photo_record?.id,
				created_at: new Date().toISOString()
			});

			locals.pb?.autoCancellation(false);

			await Promise.all(
				volunteerIDs.map(
					async (vol) =>
						await locals.pb?.collection('activity_users').create({
							user_id: vol,
							activity_id: activity_record?.id
						})
				)
			);

			return {
				msg: 'entity created'
			};
		} catch (e) {
			console.error("entity wasn't created", e);
		}

		return {
			msg: 'entity not created'
		};
	}
};
