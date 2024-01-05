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
		const res = {
			...Object.fromEntries(data),
			created_by: 'yz16vdmpybxnzdx',
			volunteers: data.getAll('volunteers')
		};
		try {
			const record = await locals.pb?.collection('activity').create(res);
			return {
				msg: 'entity created',
				record
			};
		} catch (e) {
			console.error("entity wasn't created", e);
		}
		return {
			msg: 'entity not created'
		};
	}
};
