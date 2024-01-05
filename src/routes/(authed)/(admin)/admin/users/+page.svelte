<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserList from '$lib/components/user/user-list.svelte';

	export let data;
</script>

<PageLayout>
	<h2 slot="header">users</h2>

	<svelte:fragment slot="body">
		<UserList users={data.users} />
	</svelte:fragment>
</PageLayout>
