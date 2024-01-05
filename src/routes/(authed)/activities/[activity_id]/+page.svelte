<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserTable from '$lib/components/user/user-list.svelte';

	export let data;
</script>

<PageLayout>
	<h1 slot="header">المتطوعين</h1>

	<svelte:fragment slot="body">
		{#if data.activity.expand.volunteers}
			{@const users = data.activity.expand.volunteers}
			<UserTable {users} />
		{/if}
	</svelte:fragment>
</PageLayout>
