<script>
	import { enhance } from '$app/forms';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';

	export let data;
</script>

<PageLayout>
	<h2 slot="header">create new commute</h2>
	<svelte:fragment slot="body">
		<form method="POST" use:enhance>
			<label>
				date: <input type="date" name="at_date" />
			</label>
			<label>
				hours: <input type="number" name="hours" />
			</label>
			<label>
				activity:
				<select name="activity_id">
					{#each data.activities as activity}
						<option value={activity.id}>{activity.title}</option>
					{/each}
				</select>
			</label>
			<label>
				<input name="comment" />
			</label>
			<button
				type="submit"
				on:click={() => {
					history.back();
				}}>submit</button
			>
		</form>
	</svelte:fragment>
</PageLayout>
