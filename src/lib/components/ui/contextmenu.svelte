<script lang="ts">
	export let menu: { name: string; href: string; action?: (node: HTMLElement) => void }[] = [];
</script>

<menu class="flex">
	{#each menu as { action, ...item }}
		{#if action}
			<li use:action><a href={item.href} target="_self">{item.name}</a></li>
		{:else}
			<li><a href={item.href} target="_self">{item.name}</a></li>
		{/if}
	{/each}
</menu>

<style>
	menu {
		position: absolute;
		display: flex;
		flex-direction: column;

		z-index: 2;
		right: 120%;
		top: 60%;
		width: 12ch;
		height: max-content;
		background-color: white;

		list-style-type: none;
		border-radius: 0.25rem;
		font-size: 1.25rem;
		overflow: hidden;
		box-shadow: var(--base-box-shadow);

		outline: var(--base-outline);
	}

	li {
		display: flex;

		width: 100%;
		position: relative;

		text-align: right;

		direction: rtl;

		&:hover {
			background-color: var(--hover-background-color);
			color: black;
			/* color: ; */
		}

		&:not(:last-of-type)::after {
			position: absolute;
			left: 12.5%;
			bottom: 0;
			content: ' ';
			width: 75%;
			height: 1px;
			background-color: var(--third-background-color);
		}

		& a {
			height: 100%;
			width: 100%;
			text-decoration: none;
			color: inherit;
		}

		& > * {
			padding: 0.25rem;
			padding-inline-start: 0.5rem;
			padding-inline-end: 0.5rem;
		}
	}
</style>
