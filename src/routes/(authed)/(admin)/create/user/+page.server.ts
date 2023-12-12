export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();

		const res = {
			...Object.fromEntries(data),
			isAdmin: data.get('isAdmin') === 'on',
			created_by: 'yz16vdmpybxnzdx',
			emailVisibility: true
		};

		const record = await locals.pb?.collection('users').create(res);

		return {
			record
		};
	}
};
