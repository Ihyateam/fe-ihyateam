import { env } from '$env/dynamic/public';

type GET_URL_OPTIONS = {
	collectionId: string;
	id: string;
	photo: string;
};

export function getURL(
	{ collectionId, id, photo }: GET_URL_OPTIONS,
	options: { thumb?: string } = {}
) {
	if (!photo) {
		return '/no-image.png';
	}
	const params = Object.entries(options);
	const url = new URL(`api/files/${collectionId}/${id}/${photo}`, env.PUBLIC_POCKETBASE_HOST);
	params.forEach(([key, value]) => url.searchParams.append(key, value));
	return url.toString();
}
