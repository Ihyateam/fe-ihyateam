<script>
	import { enhance } from '$app/forms';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
</script>

<PageLayout>
	<header slot="header">
		<h2>Create New User</h2>
	</header>

	<svelte:fragment slot="body">
		<form dir="ltr" method="POST" action="?/create" use:enhance>
			<label>firstname: <input name="first_name" placeholder="firstname" /></label>
			<label>lastname: <input name="last_name" placeholder="lastname" /></label>
			<label>email: <input name="email" placeholder="email" /></label>
			<label>age: <input name="age" type="number" min="14" max="99" /></label>
			<label>username: <input name="username" placeholder="username" /></label>
			<label>password: <input name="password" placeholder="password" /></label>
			<label>password: <input name="passwordConfirm" placeholder="password confirm" /></label>
			<input type="checkbox" name="isAdmin" />
			<button type="submit">submit</button>
		</form>
	</svelte:fragment>
</PageLayout>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		outline: var(--base-outline);
		padding: 1rem;
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}
</style>
