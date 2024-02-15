import validatorId from '$lib/server/validatorId.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	if (!validatorId(params)) error(404, { message: 'لم يتم العثور على العنصر التي تبحث عنه' });

	return {
		...params
	};
}
