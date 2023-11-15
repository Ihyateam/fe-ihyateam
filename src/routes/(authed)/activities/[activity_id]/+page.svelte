<script lang="ts">
	import ProfileList from '$lib/components/profile/profile-list.svelte';
	export let data;
	console.log(data.activity);
</script>

{#if data.activity?.expand}
	{@const users = data.activity.expand.volunteers}
	<ProfileList {users} />
{/if}
