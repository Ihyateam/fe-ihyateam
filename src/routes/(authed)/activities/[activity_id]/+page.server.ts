import type { UserEntity } from '$lib/types.js';

export async function load({ params, locals }) {
	const activity = await locals.pb
		?.collection('activities')
		.getOne(params.activity_id, { expand: 'volunteers' });

	if (activity?.expand) {
		activity?.expand.volunteers?.forEach((volunteer: UserEntity) => {
			volunteer.photo =
				locals.pb?.files.getUrl(volunteer, volunteer.photo, { thumb: '100X100' }) || '/profile.png';
		});
	}

	return {
		activity
	};
}
