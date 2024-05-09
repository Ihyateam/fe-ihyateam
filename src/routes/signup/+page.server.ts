import { error } from '@sveltejs/kit';

export async function load() {
	return error(402, { message: 'oops!' });
}
