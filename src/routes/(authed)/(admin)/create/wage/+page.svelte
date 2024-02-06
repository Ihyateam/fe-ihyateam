<script>
	import { enhance } from '$app/forms';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	export let data;
</script>

<PageLayout>
	<header slot="header">
		<h1>create wage</h1>
	</header>

	<form slot="body" method="POST" action="?/create" on:submit={history.back} use:enhance>
		<label>
			<input
				name="working_hour_rate"
				placeholder="working hour rate"
				type="text"
				inputmode="numeric"
				required
			/>
		</label>
		<label>
			<input
				name="commuting_hour_rate"
				placeholder="commuting hour rate"
				type="text"
				inputmode="numeric"
				required
			/>
		</label>
		<label>
			<select name="currency_id" required>
				<option value="" selected disabled>select currency</option>
				{#each data.currencies ?? [] as currency (currency.id)}
					<option value={currency.id}>{currency.currency_name} - {currency.symbol}</option>
				{/each}
			</select>
		</label>
		<button type="submit">create</button>
	</form>
</PageLayout>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 8px;

		& > button {
			width: 30ch;
		}
	}
</style>
