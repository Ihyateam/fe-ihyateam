export async function load({ params, locals }) {
	const activity = await locals.pb
		?.collection('activities')
		.getOne(params.activity_id, { expand: 'volunteers' });
	return {
		activity
	};
}
