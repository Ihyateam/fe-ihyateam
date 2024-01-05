export async function load({ locals }) {
	const efforts = (await locals.pb?.collection('effort').getFullList()) as any[];
	const commutes = (await locals.pb?.collection('commute').getFullList()) as any[];
	return {
		efforts,
		commutes
	};
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		console.log(Object.fromEntries(data));
		// locals.pb?.collection('tasks').create(Object.fromEntries(data));
	}
};
