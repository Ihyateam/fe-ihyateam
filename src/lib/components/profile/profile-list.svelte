<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import Profile from './profile.svelte';

	export let users: UserEntity[];
</script>

<ul>
	{#each users as user}
		<li>
			<Profile {user} />
		</li>
	{/each}
</ul>

<style>
	ul {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		list-style-type: none;
	}
</style>
