<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserList from '$lib/components/user/user-list.svelte';

	export let data;

	let config = {
		ar: {
			title: 'متطوع'
		}
	};
</script>

<PageLayout>
	<header slot="header">
		<span>{data.volunteers?.length} {config['ar'].title}</span>
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
		width: 100%;
		height: 2rem;
	}

	[slot='body'] {
		flex-direction: column;
	}
</style>
