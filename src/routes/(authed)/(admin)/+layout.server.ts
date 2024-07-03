

export async function load({ locals }) {
	locals.security.isAdmin();
}
