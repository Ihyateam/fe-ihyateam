<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatcher = createEventDispatcher();

	function useBackgroundAction(node: HTMLDivElement) {
		function triggerBackgroundClick(option = {}) {
			dispatcher('backgroundClick', option);
		}

		function handleBackgroundClick() {
			triggerBackgroundClick();
		}

		function handleBackgroundKeydown({ key }: KeyboardEvent) {
			if (key === 'Escape') triggerBackgroundClick();
		}

		node.addEventListener('click', handleBackgroundClick);
		window.addEventListener('keydown', handleBackgroundKeydown);

		return {
			destroy() {
				node.removeEventListener('click', handleBackgroundClick);
				window.removeEventListener('keydown', handleBackgroundKeydown);
			}
		};
	}
</script>

<div class="bg" use:useBackgroundAction />

<style>
	.bg {
		display: block;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100vw;
		height: 100svh;
		position: fixed;
		cursor: default;
		backdrop-filter: blur(1px);
	}
</style>
