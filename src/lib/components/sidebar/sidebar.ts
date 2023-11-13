import { derived, writable } from 'svelte/store';

const value = writable<string | null>('');
const content = writable<any | undefined>(undefined);
export function factory(initial_val: string | null = null) {
	value.set(initial_val);

	const action_state = derived(value, (val) => {
		return (id: string) => {
			return { disabled: val === id || undefined };
		};
	});

	function action(
		node: HTMLButtonElement,
		obj:
			| { Component: ConstructorOfATypedSvelteComponent; props?: SvelteAllProps }
			| undefined = undefined
	) {
		if (initial_val && node.disabled) {
			content.set(obj);
		}

		function listener() {
			if (node.dataset.id) {
				value.set(node.dataset.id);
				content.set(obj);
			}
		}

		node.addEventListener('click', listener);

		return {
			destroy() {
				node.removeEventListener('click', listener);
			}
		};
	}

	action.subscribe = action_state.subscribe;

	return {
		action
	};
}
