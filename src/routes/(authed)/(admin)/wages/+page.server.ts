export async function load({ locals }): Promise<{ wages?: any[] }> {
	return {
		wages: await locals.pb?.collection('wage').getFullList()
	};
}
