import { preloadData, pushState } from '$app/navigation';
import { page } from '$app/stores';
import { get, type Writable } from 'svelte/store';

type handleShallowRoutingParams = { data: Writable<unknown> };

async function fetchPreloadData(href: string) {
	const res = await preloadData(href)
		.then((response) => response?.data)
		.catch(() => {
			console.error(`Failed to preload data for ${href}`);
		});
	return res;
}

export function useShallowRouting(node: HTMLAnchorElement, opts?: handleShallowRoutingParams) {
	async function handleShallowRouting(e: MouseEvent) {
		e.preventDefault();
		const { href } = node;
		if (opts) {
			const { data } = opts;
			const res = await fetchPreloadData(href);
			data.set({ ...res, path: href.split('/').pop() });
		}
		pushState(href, { showPage: !get(page).state.showPage });
	}

	node.addEventListener('click', handleShallowRouting);

	return {
		destroy() {
			node.removeEventListener('click', handleShallowRouting);
		}
	};
}
