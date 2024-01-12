<script lang="ts">
	import UserTable from '$lib/components/user/user-list.svelte';

	export let data;
</script>

<div>
	{#if data.users}
		<UserTable users={data.users} />
	{/if}
</div>
