import { env } from '$env/dynamic/public';
import type { ActivityEntity, ExpandPhotoEntity } from '$lib/types';

export function getURL({ expand }: ExpandPhotoEntity, options: { thumb?: string } = {}) {
	if (!expand?.photo_id) return '/no-image.png';

	const { collectionId, id, photo } = expand.photo_id;

	const params = Object.entries(options);
	const url = new URL(`api/files/${collectionId}/${id}/${photo}`, env.PUBLIC_POCKETBASE_HOST);
	params.forEach(([key, value]) => url.searchParams.append(key, value));
	return url.toString();
}

export function groupBy<T, K extends keyof T>(list: T[], keySelector: (item: T) => K) {
	const result: { [k in keyof T]: T[] } = {};

	for (const item of list) {
		const val = keySelector(item);

		if (result[val] === undefined) {
			result[val] = [];
		}

		result[val].push(item);
	}

	return result;
}

export function getActivityStatus(activity: ActivityEntity): 'done' | 'ongoing' | 'scheduled' {
	const today = new Date().getTime();
	const startTime = new Date(activity.start_at).getTime();
	const endTime = new Date(activity.end_at).getTime();

	if (today > endTime) return 'done';
	if (today < startTime) return 'scheduled';

	return 'ongoing';
}
