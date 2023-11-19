<script lang="ts">
	function closeDialog() {
		isOpen = false;
	}

	function dialog(node: HTMLElement) {
		node.addEventListener('click', closeDialog);

		return {
			destroy() {
				node.removeEventListener('click', closeDialog);
			}
		};
	}

	let isOpen = false;
</script>

<button on:click={() => (isOpen = !isOpen)}>open dialog</button>

{#if isOpen}
	<div class="bg" use:dialog />

	<div class="dialog">
		<slot />
	</div>
{/if}

<style>
	@media (prefers-reduced-transparency: reduce) {
		.bg {
			--opacity: 0.95;
		}
	}

	.bg {
		top: 0;
		left: 0;
		z-index: 0;
		width: 100vw;
		height: 100svh;
		position: fixed;
		backdrop-filter: blur(1px);

		background: hsl(0 0% 90% / var(--opacity, 0.5));
	}

	.dialog {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 200px;
		height: 190px;
		position: fixed;
		border-radius: 1rem;
		background-color: hsl(0, 0%, 93%);

		top: calc(50vh - 100px);
		left: calc(50vw - 80px);
		gap: 10px;
		box-shadow: 0px 0px 6px 0px hsl(0, 0%, 30%);
	}
</style>
