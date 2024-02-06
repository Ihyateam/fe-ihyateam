import type { CurrencyEntity } from '$lib/types.js';

export async function load({ locals }) {
	return {
		currencies: await locals.pb?.collection('currency').getFullList<CurrencyEntity>()
	};
}

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();
		console.log(Object.fromEntries(data));
		locals.pb?.collection('wage').create(Object.fromEntries(data));
	}
};
