export async function load({ locals }) {
	const volunteers = locals.pb?.collection('users').getFullList();
	return { volunteers };
}
