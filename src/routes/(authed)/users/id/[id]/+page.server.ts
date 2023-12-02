export async function load({ params, locals }) {
	if (locals.pb?.authStore.isValid && locals.pb?.authStore.model) {
		return {
			user: locals.pb.authStore.model
		};
	}

	return {
		...params
	};
}
