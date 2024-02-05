import { load as userLoad } from '../(admin)/admin/users/id/[id]/+page.server';

export async function load(req) {
	let { params } = req;
	params.id = req.locals.pb.authStore.model.id;
	return await userLoad({ ...req, params });
}
