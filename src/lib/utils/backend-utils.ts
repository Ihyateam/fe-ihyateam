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
