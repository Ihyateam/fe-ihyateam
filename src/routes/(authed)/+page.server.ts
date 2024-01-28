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
		(await locals.pb?.collection('top_volunteers_commute').getFullList({ expand: 'photo_id' })) ??
		[];

	const top_volunteers_effort =
		(await locals.pb?.collection('top_volunteers_effort').getFullList({ expand: 'photo_id' })) ??
		[];

	const top_volunteers = [...top_volunteers_commute, ...top_volunteers_effort].reduce(
		(acc, item) => {
			if (acc[item.id]) {
				acc[item.id].hours += item.hours;
				return acc;
			}
			acc[item.id] = item;
			return acc;
		},
		{}
	);

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
