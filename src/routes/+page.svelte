<script lang="ts">
	import LanguageBtn from '$lib/Component/language/language-btn.svelte';
	import Login from '$lib/Component/login/login.svelte';

	export let data;
</script>

<main>
	{#if data.user}
		<div>Homepage</div>
	{:else}
		<Login />
	{/if}
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 2rem;
		height: 100vh;
	}
</style>
