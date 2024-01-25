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

export function groupBy(arr: any[], callbackFn: () => any): any[] {
	const temp = [];

	for (const i of arr) {
		const key = callbackFn(i);
		if (temp[key]) {
			temp[key].push(i);
		} else {
			temp[key] = [i];
		}
	}

	return temp;
}

export function getActivityStatus(activity: ActivityEntity): 'done' | 'ongoing' | 'scheduled' {
	const today = new Date().getTime();
	const startTime = new Date(activity.start_at).getTime();
	const endTime = new Date(activity.end_at).getTime();

	if (today > endTime) return 'done';
	if (today < startTime) return 'scheduled';

	return 'ongoing';
}
