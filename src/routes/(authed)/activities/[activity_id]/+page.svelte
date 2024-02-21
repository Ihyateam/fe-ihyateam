<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserTable from '$lib/components/user/user-list.svelte';

	export let data;
	const { users } = data;
</script>

<PageLayout>
	<h1 slot="header">المتطوعين</h1>

	<svelte:fragment slot="body">
		<UserTable {users} />

		<div dir="ltr">
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	</svelte:fragment>
</PageLayout>

<style>
	[dir='ltr'] {
		margin-block-start: 2rem;
		outline: 1px solid salmon;
	}
</style>
