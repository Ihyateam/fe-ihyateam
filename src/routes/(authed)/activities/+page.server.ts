export async function load({ locals }) {
	const activities = await locals.pb?.collection('activities').getFullList();
	activities?.forEach(
		(activity, id) =>
			(activities[id] = {
				...activity,
				profile: locals.pb?.files.getUrl(activity, activity.profile, { thumb: '100X100' })
			})
	);
	return {
		activities
	};
}
