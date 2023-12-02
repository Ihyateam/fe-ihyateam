import { PUBLIC_POCKETBASE_HOST } from '$env/static/public';

type GET_URL_OPTIONS = {
	collectionId: string;
	id: string;
	photo: string;
};

export function getURL({ collectionId, id, photo }: GET_URL_OPTIONS) {
	const url = new URL(PUBLIC_POCKETBASE_HOST);
	url.pathname += `api/files/${collectionId}/${id}/${photo}`;
	return url.toString();
}
