import type { WageEntity, UserEntity, CityEntity } from '$lib/types.js';

export async function load({ locals }) {
	const volunteers = locals.pb?.collection<UserEntity>('users').getFullList()!;
	const wages = locals.pb?.collection<WageEntity>('wage').getFullList()!;
	const cities = locals.pb?.collection<CityEntity>('city').getFullList()!;

	return { volunteers: await volunteers, wages: await wages, cities: await cities };
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

		try {
			const res = Object.fromEntries(data);
			const photo_record = await locals.pb?.collection('photo').create({ photo });

			const activity_record = await locals.pb?.collection('activity').create({
				...res,
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
