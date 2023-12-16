import { error } from '@sveltejs/kit';

const config = {
	ar: {
		error: {
			message: 'تأكد من الصلاحيات التي تمكلها',
		}
	}
}
export async function load({ locals }) {
	if (!locals.pb?.authStore?.model?.isAdmin) {
		error(404, config['ar'].error);
	}
}
