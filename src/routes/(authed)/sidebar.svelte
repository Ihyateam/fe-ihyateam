<script lang="ts">
	import {
		ActivityIcon,
		DashboardIcon,
		UsersIcon,
		NewActivityIcon,
		MoneyIcon
	} from '$lib/components/icons';
	import AnchorItem from '$lib/components/layouts/anchor-item.svelte';
	import type { SidebarComponentConfig } from '$lib/types';

	export let isAdmin: boolean;

	export let adminConfig: SidebarComponentConfig[] = [
		{
			id: 'activities',
			attr: {
				ar: {
					['data-tooltip']: 'الأنشطة'
				}
			},
			props: {
				href: '/activities',
				target: '_self'
			},
			adminRoleOnly: true,
			Icon: NewActivityIcon
		},

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
			adminRoleOnly: true,
			Icon: UsersIcon
		},

		{
			id: 'wage',
			attr: {
				ar: {
					['data-tooltip']: 'الأجور'
				}
			},
			props: {
				href: '/wages',
				target: '_self'
			},
			adminRoleOnly: true,
			Icon: MoneyIcon
		}
	];

	export let config: SidebarComponentConfig[] = [
		{
			id: 'activity',
			attr: {
				ar: {
					['data-tooltip']: 'أنشطة'
				}
			},
			props: {
				href: '/my_activities',
				target: '_self'
			},
			Icon: ActivityIcon
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
			Icon: DashboardIcon
		}
	];

	$: isAdmin && config.push(...adminConfig);
</script>

<div class="upper-div">
	<menu>
		{#each config as item}
			<AnchorItem {item} />
		{/each}
	</menu>
</div>

<style>
	.upper-div {
		overflow: scroll;
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
