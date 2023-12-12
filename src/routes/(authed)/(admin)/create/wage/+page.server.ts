export const actions = {
	create: async ({request, locals}) => {
        const data = await request.formData();
        locals.pb?.collection('wage').create(Object.fromEntries(data));
	}
};
