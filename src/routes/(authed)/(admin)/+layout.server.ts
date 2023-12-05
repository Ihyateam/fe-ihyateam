import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.pb?.authStore?.model?.isAdmin) {
		throw redirect(303, '/');
	}
}
