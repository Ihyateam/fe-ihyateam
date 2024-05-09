import { preloadData, pushState } from '$app/navigation';
import { page } from '$app/stores';
import { get, type Writable } from 'svelte/store';

type handleShallowRoutingParams = { data: Writable<unknown> };

async function fetchPreloadData(href: string) {
	try {
		while (href) {
			const res = await preloadData(href);
			if (res.type === 'loaded') return { data: res.data, href };
			href = res.location;
		}
	} catch (e) {
		console.error(`Failed to preloadData for ${href}:`, (e as Error).message);
	}
	return { fail: true, href };
}

export function useShallowRouting(node: HTMLAnchorElement, opts?: handleShallowRoutingParams) {
	async function handleShallowRouting(e: MouseEvent) {
		e.preventDefault();
		let { href } = node;
		if (opts) {
			const { data } = opts;
			const res = await fetchPreloadData(href);
			if (res.fail) return alert('failed prefetch ' + href);
			href = res.href;
			data.set(res.data);
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
