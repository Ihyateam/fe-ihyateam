<script lang="ts">
	import type { SidebarComponentConfig } from '$lib/types';

	export let item: SidebarComponentConfig;
	let { Icon } = item;
</script>

<li class:admin={item?.adminRoleOnly} {...$$restProps}>
	<a {...item.attr['ar']} href={item.props.href} target={item.props.target}>
		<Icon width="75%" height="75%" />
	</a>
</li>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;

		width: 2.5rem;
		height: 2.5rem;
		border-radius: 4px;
		background-color: var(--base-background-color);
		outline: var(--base-outline);
		font-size: 1em;
		color: black;
	}

	a:hover {
		background-color: var(--button-secondary-hover-background-color);
	}

	[data-tooltip]::after {
		left: 60px;

		display: flex;
		visibility: hidden;
		border-radius: 4px;
		position: absolute;
		white-space: nowrap;

		padding-top: 0.128rem;
		padding-bottom: 0.128rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;

		content: attr(data-tooltip);
		border: 0.5px solid var(--button-hover-background-color-2);
		background-color: var(--button-secondary-hover-background-color);
	}

	[data-tooltip]:hover::after {
		visibility: visible;
		animation: tooltipkeys 200ms 1;
	}

	.admin > [data-tooltip]::after,
	.admin > a:hover {
		background-color: var(--button-admin-hover-background-color);
	}

	.admin > [data-tooltip]::after {
		border: 0.5px solid var(--button-admin-hover-background-color-2);
	}

	@keyframes tooltipkeys {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	:global(:not(.admin) + .admin) {
		margin-top: auto;
	}
</style>
