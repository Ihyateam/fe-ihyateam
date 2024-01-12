import { load as activitiesLoader } from '../../../../../activities/[activity_id]/+page.server.js';

export async function load(obj) {
	return await activitiesLoader(obj);
}
