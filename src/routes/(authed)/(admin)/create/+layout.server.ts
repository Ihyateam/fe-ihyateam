import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	if (!locals.pb?.authStore?.model?.isAdmin) {
		throw redirect(300, '/');
	}
	return {};
}
