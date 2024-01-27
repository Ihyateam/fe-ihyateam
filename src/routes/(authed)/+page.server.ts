import type { UserEntity } from '$lib/types.js';
import { groupBy } from '$lib/utils/backend-utils.js';

export async function load({ locals }): Promise<{
	metrics: {
		activities: number;
		users: number;
		hours: number;
		balance: number;
		top_volunteers?: any[];
	};
}> {
	const users = (await locals.pb?.collection('users').getFullList<UserEntity>())?.length ?? 0;
	const activities = (await locals.pb?.collection('activity').getFullList())?.length ?? 0;
	const hours = [
		...((await locals.pb?.collection('effort').getFullList()) ?? []),
		...((await locals.pb?.collection('commute').getFullList()) ?? [])
	].reduce((acc, item) => acc + item.hours, 0);

	const top_volunteers_commute =
		(await locals.pb?.collection('top_volunteers_commute').getFullList()) ?? [];

	const top_volunteers_effort =
		(await locals.pb?.collection('top_volunteers_effort').getFullList()) ?? [];

	const group_arr = groupBy([...top_volunteers_commute, ...top_volunteers_effort], (x) => x.id);

	const top_volunteers = Object.entries(group_arr)
		.map(([key, values]) => ({
			[key]: values.reduce(
				(acc, currentValue) => ({ ...currentValue, ehours: acc.ehours + currentValue.ehours }),
				{
					ehours: 0
				}
			)
		}))
		.sort((a, b) => Object.values(b)[0].ehours - Object.values(a)[0].ehours)
		.slice(0, 5);

	return {
		metrics: {
			users,
			activities,
			hours,
			balance: 43801,
			top_volunteers
		}
	};
}
