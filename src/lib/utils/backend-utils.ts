import { PUBLIC_POCKETBASE_HOST } from '$env/static/public';

type GET_URL_OPTIONS = {
	collectionId: string;
	id: string;
	photo: string;
};

export function getURL(
	{ collectionId, id, photo }: GET_URL_OPTIONS,
	options: { thumb?: string } = {}
) {
	const params = Object.entries(options);
	const url = new URL(`api/files/${collectionId}/${id}/${photo}`, PUBLIC_POCKETBASE_HOST);
	params.forEach(([key, value]) => url.searchParams.append(key, value));
	return url.toString();
}
