<script lang="ts">
	import AnchorItem from '$lib/components/layouts/anchor-item.svelte';
	import type { SidebarComponentConfig } from '$lib/types';

	export let isAdmin: boolean;
	export let adminConfig: SidebarComponentConfig[] = [];
	export let sidebarConfig: SidebarComponentConfig[];
	$: isAdmin && sidebarConfig.push(...adminConfig);
</script>

<div class="upper-div">
	<menu>
		{#each sidebarConfig as item}
			<AnchorItem {item} />
		{/each}
	</menu>
</div>

<style>
	.upper-div {
		overflow: auto;
		display: flex;
		height: 100%;
	}

	menu {
		display: flex;
		width: 3.5rem;
		height: 100%;
		gap: 10px 0px;
		align-items: center;
		flex-direction: column;
		padding: 7px 0px 7px 0px;

		background-color: var(--secondary-background-color);
		list-style: none;
		border-right: 0.5px solid #8888;
		padding-bottom: 2rem;
	}
</style>
