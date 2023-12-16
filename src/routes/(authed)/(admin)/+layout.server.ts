import { error, redirect } from '@sveltejs/kit';

const config = {
	ar: {
		error: {
			message: 'هذا المسار يحتاج صلاحية مسؤول للوصول إليه'
		}
	}
};
export async function load({ locals }) {
	if (!locals.pb?.authStore?.model?.isAdmin) {
		error(404, config['ar'].error);
	}
	if (!locals.pb.authStore.isValid) {
		redirect(303, '/auth/login');
	}
}
