<script>
	import NewUserIcon from '$lib/components/icons/new-user-icon.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserList from '$lib/components/user/user-list.svelte';

	export let data;

	let config = {
		ar: {
			title: 'المتطوعين',
			volunteers: 'متطوع',
			new_volunteer: 'متطوع جديد'
		}
	};
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>{data.volunteers?.length} {config['ar'].volunteers}</span>
		<a href="/create/user" target="_self">
			{config['ar'].new_volunteer}
			<NewUserIcon width="24px" height="24px" />
		</a>
	</header>
	<div slot="body">
		{#if data.volunteers === undefined}
			<p>testing..</p>
		{:else}
			<UserList users={data.volunteers} />
		{/if}
	</div>
</PageLayout>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2rem;

		& > a {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.5rem 1.5rem 0.5rem 1.5rem;
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

	[slot='body'] {
		flex-direction: column;
		height: min(max-content, 75svh);
	}
</style>
