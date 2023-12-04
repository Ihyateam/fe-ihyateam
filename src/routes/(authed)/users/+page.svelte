<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserList from '$lib/components/user/user-list.svelte';

	export let data;

	let config = {
		ar: {
			title: 'المتطوعين',
			volunteers: 'متطوع'
		}
	};
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>{data.volunteers?.length} {config['ar'].volunteers}</span>
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
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 2rem;
	}

	[slot='body'] {
		flex-direction: column;
		height: min(max-content, 75svh);
	}
</style>
