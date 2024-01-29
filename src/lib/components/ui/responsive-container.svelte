<script lang="ts">
	export let element: keyof HTMLElementTagNameMap = 'section';
</script>

<svelte:element this={element} class="responsive-container" {...$$restProps}>
	<slot />
</svelte:element>

<style>
	.responsive-container {
		container-type: inline-size;
		container-name: var(--container-name);
	}
</style>
