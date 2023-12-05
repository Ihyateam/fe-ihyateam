<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatcher = createEventDispatcher();

	function useBackgroundAction(node: HTMLDivElement) {
		function handleBackgroundClick() {
			dispatcher('backgroundClick', () => ({
				isOpen: !isOpen
			}));
		}

		node.addEventListener('click', handleBackgroundClick);

		return {
			destroy() {
				node.removeEventListener('click', handleBackgroundClick);
			}
		};
	}

	export let isOpen = false;
</script>

<div class:bg={isOpen} use:useBackgroundAction />

<style>
	div {
		display: none;
	}

	.bg {
		display: block;
		top: 0;
		left: 0;
		z-index: 0;
		width: 100vw;
		height: 100svh;
		position: fixed;
		backdrop-filter: blur(1px);
	}
</style>
