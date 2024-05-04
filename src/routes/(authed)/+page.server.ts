import { fail } from '@sveltejs/kit';

export async function load({ locals : { pb }}): Promise<{
	metrics: {
		activities: number;
		users: number;
		hours: number;
		balance: number;
		top_volunteers?: unknown[];
	};
}> {
	if(!pb) fail(502, {message: 'failed establishing connection to database'});

	const users = await (pb.collection('users').getFullList()).then((res: Array<unknown>) => res.length) ?? 0;
	const activities = await ( pb.collection('activity').getFullList()).then((res: Array<unknown>) => res.length) ?? 0;
	const hours = [
		...((await pb.collection('effort').getFullList()) ?? []),
		...((await pb.collection('commute').getFullList()) ?? [])
	].reduce((acc, item) => acc + item.hours, 0);

	const top_volunteers_commute =
		await pb.collection('top_volunteers_commute').getFullList({ expand: 'photo_id' });

	const top_volunteers_effort =
		await pb.collection('top_volunteers_effort').getFullList({ expand: 'photo_id' });

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
