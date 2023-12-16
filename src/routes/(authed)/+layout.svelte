<script lang="ts">
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Sidebar from './sidebar.svelte';
	import {
		ActivityIcon,
		HomeIcon,
		UsersIcon,
		NewActivityIcon,
		MoneyIcon
	} from '$lib/components/icons';

	export let data;

	const adminConfig = [
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

	const sidebarConfig = [
		{
			id: 'landing-page',
			attr: {
				ar: {
					['data-tooltip']: 'الصفحة الرئيسية'
				}
			},
			props: {
				href: '/',
				target: '_self'
			},
			Icon: HomeIcon
		},
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
		}
	];
</script>

<div class="upper">
	<Navbar user={data.user} />
	<div class="inner">
		<Sidebar isAdmin={data.user.isAdmin} {adminConfig} {sidebarConfig} />
		<main dir="rtl">
			<slot />
		</main>
	</div>
</div>

<style>
	.upper {
		width: 100vw;
		height: 100svh;
		display: grid;
		grid-template-rows: 3.5rem 1fr;
		grid-template-columns: 1fr;
		grid-template-areas: 'header' 'content';
	}

	.inner {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		grid-template-rows: 1fr;
	}

	main {
		display: flex;
		justify-content: center;

		height: calc(100svh - 3.5rem);
		width: 100%;

		overflow: auto;
	}
</style>
