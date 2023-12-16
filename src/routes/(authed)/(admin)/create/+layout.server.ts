import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	if (!locals.pb?.authStore?.model?.isAdmin) {
		redirect(300, '/');
	}
	return {};
}
