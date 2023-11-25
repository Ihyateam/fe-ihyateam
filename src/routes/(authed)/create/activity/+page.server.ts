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

	return { volunteers, wages, cities, status };
}

export const actions = {
	createActivity: async ({ request, locals }) => {
		const data = await request.formData();
		const res = {
			...Object.fromEntries(data),
			volunteers: data.getAll('volunteers'),
			city_id: data.getAll('city_id')
		};
		try {
			const record = await locals.pb?.collection('activities').create(res);
			return {
				msg: 'entity created',
				record
			};
		} catch (e) {
			console.log("entity wasn't created", e);
		}
		return {
			msg: 'entity not created'
		};
	}
};
