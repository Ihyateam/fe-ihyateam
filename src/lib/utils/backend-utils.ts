import { env } from '$env/dynamic/public';
import type { ExpandPhotoEntity } from '$lib/types';

export function getURL({ expand }: ExpandPhotoEntity, options: { thumb?: string } = {}) {
	if (!expand?.photo_id) return '/no-image.png';

	const { collectionId, id, photo } = expand.photo_id;

	const params = Object.entries(options);
	const url = new URL(`api/files/${collectionId}/${id}/${photo}`, env.PUBLIC_POCKETBASE_HOST);
	params.forEach(([key, value]) => url.searchParams.append(key, value));
	return url.toString();
}

export function groupBy<T, K extends keyof T>(list: T[], keySelector: (item: T) => K) {
	const result: Record<K, T[]> = {};

	for (const item of list) {
		const val = keySelector(item);

		if (val?.constructor?.name !== 'String' && val?.constructor?.name !== 'Number') {
			throw new Error('Key must be string or number.');
		}

		if (result[val] === undefined) {
			result[val] = [];
		}

		result[val].push(item);
	}

	return result;
}
