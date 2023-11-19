<script lang="ts">
	import Dialog from '$lib/components/form/dialog.svelte';
	import type { UserEntity } from '$lib/types';

	export let volunteers: UserEntity[] = [];

	$: chosens = [];

	$: chosen_volunteers = chosens.map((id) =>
		volunteers.find((vol) => vol.id === id)
	) as UserEntity[];
</script>

<form>
	<label>Name: <input name="name" placeholder="activity name" /></label>
	<label>Description: <input name="descript" placeholder="activity description" /></label>

	<div class="chosens">
		{#if chosen_volunteers.length > 0}
			{#each chosen_volunteers as vol}
				<i>{vol.first_name} {vol.last_name}</i>
			{/each}
		{/if}
	</div>

	{#if volunteers.length === 0}
		<p>
			no volunteers to be added for this activity please add
			<Dialog>
				<a href="/create/user" target="_blank" rel="noopener">new volunteers first</a>
			</Dialog>
		</p>
	{:else}
		<select multiple bind:value={chosens}>
			{#each volunteers as volunteer}
				<option value={volunteer.id}>{volunteer.first_name}, {volunteer.last_name}</option>
			{/each}
		</select>
	{/if}

	<label
		>how many students: <input
			name="students_number"
			placeholder="input how many students are benefit from this actvity"
		/></label
	>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		padding-top: 0.5rem;

		& .chosens {
			display: flex;
			gap: 0.5rem;

			& > * {
				padding: 0.5rem;
				outline: 1px solid salmon;
			}
		}
	}
</style>
