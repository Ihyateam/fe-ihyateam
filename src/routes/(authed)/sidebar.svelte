<script lang="ts">
	import { ActivityIcon, DashboardIcon, UsersIcon } from '$lib/components/icons';

	export let config = [
		{
			id: 'users',
			attr: {
				ar: {
					['data-tooltip']: 'المتطوعين'
				}
			},
			props: {
				href: '/users',
				target: '_self'
			},
			icon: UsersIcon
		},

		{
			id: 'activity',
			attr: {
				ar: {
					['data-tooltip']: 'أنشطة'
				}
			},
			props: {
				href: '/activities',
				target: '_self'
			},
			icon: ActivityIcon
		},

		{
			id: 'dashboard',
			attr: {
				ar: {
					['data-tooltip']: 'إحصائيات'
				}
			},
			props: {
				href: '/dashboard',
				target: '_self'
			},
			icon: DashboardIcon
		}
	];
</script>

<div class="upper-div">
	<menu>
		{#each config as item}
			<li>
				<a {...item.attr['ar']} href={item.props.href} target={item.props.target}>
					<svelte:component this={item.icon} width="75%" />
				</a>
			</li>
		{/each}
	</menu>
</div>

<style>
	.upper-div {
		display: flex;
		height: calc(100svh - 3.5rem);
	}

	menu {
		display: flex;
		width: 3.5rem;
		gap: 10px 0px;
		align-items: center;
		flex-direction: column;
		padding: 7px 0px 7px 0px;
		background-color: hsla(0, 10%, 95%);
		list-style: none;
		border-right: 0.5px solid #8888;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;

		width: 2.5rem;
		height: 2.5rem;
		border-radius: var(--btnRadius);
		background-color: var(--baseColor);
		border: 0.5px solid hsla(0, 0%, 70%, 0.8);
		font-size: 1em;
		color: black;
	}

	a:hover {
		background-color: hsla(35.6, 100%, 80%, 0.4);
	}

	.mt-auto {
		margin-top: auto;
	}

	[data-tooltip]::after {
		z-index: 1;
		left: 60px;
		display: flex;
		visibility: hidden;
		border-radius: 4px;
		position: absolute;
		white-space: nowrap;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		content: attr(data-tooltip);
		background-color: hsl(35, 100%, 86%);
		border: 0.5px solid hsl(35, 100%, 70%, 0.6);
	}

	[data-tooltip]:hover::after {
		visibility: visible;
		animation: tooltipkeys 200ms 1;
	}

	@keyframes tooltipkeys {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
