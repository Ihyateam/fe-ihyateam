<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import MultipleSelect from '$lib/components/form/multiple-select.svelte';
	import type { UserEntity, CityEntity } from '$lib/types';

	export let volunteers: UserEntity[] = [];
	export let user: UserEntity;
	export let cities: CityEntity[] = [];
	export let wages;
	export let status;

	function userParser(item: UserEntity) {
		return {
			id: item?.id,
			name: `${item?.first_name} ${item?.last_name}`
		};
	}

	function parseCity(item: CityEntity) {
		return {
			id: item?.id,
			name: item?.city_name,
			country: item?.country_id
		};
	}

	function parseWage(item) {
		return {
			id: item?.id,
			commuting_hour_rate: item?.commuting_hour_rate,
			working_hour_rate: item?.working_hour_rate
		};
	}
</script>

<form method="POST" action="?/createActivity" enctype="multipart/form-data" use:enhance>
	<label>Name: <input name="title" placeholder="activity name" /></label>
	<label>Description: <input name="description" placeholder="activity description" /></label>

	<MultipleSelect fieldset_name="volutneers-list" arr={volunteers} let:entity>
		{@const item = userParser(entity)}
		<div>
			<input id={item.id} name="volunteers" type="checkbox" value={item.id} />
			<label for={item.id}>
				{item.name}
			</label>
		</div>
	</MultipleSelect>

	<MultipleSelect fieldset_name="cities-list" arr={cities} let:entity>
		{@const item = parseCity(entity)}
		<div>
			<input id={item.id} name="city_id" type="radio" value={item.id} />
			<label for={item.id}>
				{item.name} - {item.country}
			</label>
		</div>
	</MultipleSelect>

	<MultipleSelect fieldset_name="wages-list" arr={wages} let:entity>
		{@const item = parseWage(entity)}
		<div>
			<input id={item.id} name="wage_id" type="radio" value={item.id} />
			<label for={item.id}>
				{item.commuting_hour_rate} - {item.working_hour_rate}
			</label>
		</div>
	</MultipleSelect>

	<input name="profile" type="file" accept=".png,.jpeg" />
	<label
		>how many students: <input
			type="number"
			name="students"
			placeholder="input how many students are benefit from this actvity"
			step="1"
		/></label
	>

	<fieldset>
		<label>
			start date:
			<input type="date" name="start_date" min={new Date().getTime()} />
		</label>

		<label>
			end date:
			<input type="date" name="end_date" />
		</label>
	</fieldset>

	<lable style:display="none">
		<input name="created_by" bind:value={user.id} />
	</lable>

	<select name="status">
		<option selected disabled>choose status</option>
		<option value="done">done</option>
		<option value="scheduled">scheduled</option>
		<option value="postoned">postoned</option>
		<option value="ongoing">ongoing</option>
	</select>

	<button type="submit">submit</button>
</form>

<pre>{JSON.stringify($page.form, null, 2)}</pre>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
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
