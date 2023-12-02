import { getTokenPayload } from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	console.log(getTokenPayload(locals.pb?.authStore?.token));

	console.log(locals.pb?.authStore?.model);
	if (!locals.pb?.authStore?.model) {
		throw redirect(300, '/');
	}
	return {};
}
