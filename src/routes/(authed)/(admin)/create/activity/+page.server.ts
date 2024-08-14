import type { WageEntity, UserEntity, CityEntity } from '$lib/types.js';
import { fail, json } from '@sveltejs/kit';

export async function load({ locals }) {
	const volunteers = locals.pb?.collection<UserEntity>('users').getFullList({ expand: "photo_id" })!;
	const wages = locals.pb?.collection<WageEntity>('wage').getFullList()!;
	const cities = locals.pb?.collection<CityEntity>('city').getFullList()!;

	return { volunteers: await volunteers, wages: await wages, cities: await cities };
}

export const actions = {
	createActivity: async ({ request, locals }) => {
		const data = await request.formData();
		data.append('created_by', locals.pb?.authStore.model?.id);
		data.append('created_at', new Date().toISOString());
		const photo = data.get('photo');
		const volunteerIDs = data.getAll('volutneers-list');

		if (data.has('volunteers-list')) {
			data.delete('volunteers-list');
		}

		if (data.has('photo')) {
			data.delete('photo');
		}

		try {
			const res = Object.fromEntries(data);
			const photo_record = await locals.pb?.collection('photo').create({ photo });

			if (!(res.start_at || res.end_at) || Date.parse(res.start_at as string) > Date.parse(res.end_at as string))
				throw new Error('Entered date is not valid');

			const activity_record = await locals.pb?.collection('activity').create({
				...res,
				photo_id: photo_record?.id,
				created_at: new Date().toISOString()
			});

			if (!activity_record?.id) {
				throw new Error('activity record wasn not created successfully.');
			}

			locals.pb?.autoCancellation(false);

			await Promise.allSettled(
				volunteerIDs.map(
					async (vol) =>
						await locals.pb?.collection('activity_volunteers').create({
							user_id: vol,
							activity_id: activity_record.id
						})
				)
			);

			locals.pb?.autoCancellation(true);

			return { msg: 'entity created' };
		} catch (e) {
			console.error("entity wasn't created", e);
		}

		return fail(500, { messeage: `something went wrong try again!` });

	}
}
