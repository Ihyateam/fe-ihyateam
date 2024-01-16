<script>
	import NewItemIcon from '$lib/components/icons/new-item-icon.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserList from '$lib/components/user/user-list.svelte';
	import { useShallowRouting } from '$lib/utils/useShallowRouting';
	import { page } from '$app/stores';
	import PageDialog from '$lib/components/layouts/page-dialog.svelte';
	import NewUserPage from '../../create/user/+page.svelte';

	const config = {
		ar: {
			title: 'المستخدمين',
			users: 'المستخدمين',
			new_user: 'مستخدم جديد'
		}
	};
	export let data;
</script>

<PageLayout>
	<header slot="header">
		<span>{data.users?.length} {config['ar'].users}</span>
		<a href="/create/user" target="_self" use:useShallowRouting>
			{config['ar'].new_user}
			<NewItemIcon width="24px" height="24px" />
		</a>
	</header>

	<svelte:fragment slot="body">
		<UserList users={data.users} />
	</svelte:fragment>
</PageLayout>

{#if $page.state.showPage}
	<PageDialog on:close={() => history.back()}>
		<NewUserPage />
	</PageDialog>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2rem;
		margin-bottom: 0.75rem;

		& > a {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.5rem 0 0.5rem 0;
			width: 20ch;
			gap: 0.25rem;
			border-radius: 0.5rem;
			text-decoration: none;
			background-color: var(--secondary-background-color);
			color: var(--accent-color);

			&:hover {
				background-color: var(--gold-color-1);
			}
		}
	}
</style>
