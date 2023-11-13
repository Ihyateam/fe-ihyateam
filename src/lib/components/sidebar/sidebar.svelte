<script lang="ts">
	import { ActivityIcon, SettingsIcon, SpendingIcon } from '../icons';
	import Component from './component.svelte';
	import { factory } from './sidebar';
	import { lang } from '$lib/stores/lang';

	export let config = [
		{
			id: 'activity',
			attr: {
				ar: {
					['data-tooltip']: 'أنشطة'
				},
				en: {
					['data-tooltip']: 'activities'
				},
				tr: {
					['data-tooltip']: 'faaliyetler'
				}
			},
			icon: ActivityIcon,
			component: Component
		},
		{
			id: 'settings',
			attr: {
				ar: {
					['data-tooltip']: 'الإعدادات'
				},
				en: {
					['data-tooltip']: 'settings'
				},
				tr: {
					['data-tooltip']: 'ayarlar'
				}
			},
			icon: SettingsIcon,
			component: Component
		}
	];

	const { action } = factory();
</script>

<div class="upper-div">
	<menu>
		{#each config as item}
			<li>
				<button {...item.attr[$lang]}>
					<svelte:component this={item.icon} />
				</button>
			</li>
		{/each}
	</menu>
</div>

<style>
	.upper-div {
		display: flex;
		height: calc(100vh - 3.5rem);
	}

	menu {
		display: flex;
		width: 3.5rem;
		gap: 10px 0px;
		align-items: center;
		flex-direction: column;
		padding: 7px 0px 7px 0px;
		background-color: white;
		list-style: none;
		border-right: 0.5px solid #8888;
	}

	button {
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
	}

	button:hover {
		background-color: hsla(35.6, 100%, 80%, 0.4);
	}

	li:last-of-type {
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
