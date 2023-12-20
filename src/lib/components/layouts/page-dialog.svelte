<script lang="ts">
	import BlurBackground from './blur-background.svelte';

	function useDialog(node: HTMLDialogElement) {
		function handleClickOutSide(e: MouseEvent) {
			if (e.target instanceof HTMLElement && e.target?.id === 'dialog-container') {
				node.close();
			}
		}

		node.addEventListener('click', handleClickOutSide);

		return {
			destroy() {
				node.removeEventListener('click', handleClickOutSide);
			}
		};
	}
</script>

<BlurBackground on:backgroundClick={() => history.back()} />
<dialog id="dialog-container" on:close open use:useDialog>
	<div>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		z-index: 1;
		left: 50%;
		top: 50%;
		width: 50svw;
		height: 90svh;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--full-box-shadow);
		transform: translate(-50%, -50%);
		border: none;
		border-radius: 10px;
		overflow: auto;

		& > div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100%;
		}
	}
</style>
