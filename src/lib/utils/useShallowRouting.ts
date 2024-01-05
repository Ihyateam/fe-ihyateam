import { preloadData, pushState } from '$app/navigation';
import { page } from '$app/stores';
import { get, type Writable } from 'svelte/store';

export function useShallowRouting(
	node: HTMLAnchorElement,
	{ data }: { data?: Writable<unknown> } = {}
) {
	async function handleShallowRouting(e: MouseEvent) {
		e.preventDefault();
		const { href } = node;
		const res = await preloadData(href).then((response) => response['data']);
		if (data) data.set({ ...res, path: href.split('/').pop() });
		pushState(href, { showPage: !get(page).state.showPage });
	}

	node.addEventListener('click', handleShallowRouting);

	return {
		destroy() {
			node.removeEventListener('click', handleShallowRouting);
		}
	};
}
