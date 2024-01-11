<script lang="ts">
	import UserTable from '$lib/components/user/user-list.svelte';

	export let data;
	console.log(data);
</script>

<!-- 
<div>
	{#if data.activity?.expand.volunteers}
		{@const users = data.activity.expand.volunteers}
		<UserTable {users} />
	{/if}
</div> -->
