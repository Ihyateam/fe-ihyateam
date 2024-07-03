<script lang="ts">
	import { enhance } from '$app/forms';
	import MultipleSelect from '$lib/components/form/multiple-select.svelte';
	import type { UserEntity, CityEntity, WageEntity } from '$lib/types';
	import SingularSelect from '$lib/components/form/singular-select.svelte';

	export let volunteers: UserEntity[] = [];
	export let cities: CityEntity[] = [];
	export let wages: WageEntity[] = [];

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

	function parseWage(item: WageEntity) {
		return {
			id: item?.id,
			commuting_hour_rate: item?.commuting_hour_rate,
			working_hour_rate: item?.working_hour_rate
		};
	}
</script>

<form method="POST" action="?/createActivity" enctype="multipart/form-data" use:enhance>
	<label>Name: <input name="title" placeholder="activity name" required /></label>
	<label
		>Description: <input name="description" placeholder="activity description" required /></label
	>

	<MultipleSelect name="volutneers-list" arr={volunteers} let:entity>
		{@const item = userParser(entity)}
		<div>
			<input id={item.id} name="volunteers" type="checkbox" value={item.id} />
			<label for={item.id}>
				{item.name}
			</label>
		</div>
	</MultipleSelect>

	<SingularSelect name="cities-list" arr={cities} let:entity>
		{@const item = parseCity(entity)}
		<div>
			<input id={item.id} name="city_id" type="radio" value={item.id} required />
			<label for={item.id}>
				{item.name} - {item.country}
			</label>
		</div>
	</SingularSelect>

	<MultipleSelect name="wages-list" arr={wages} let:entity>
		{@const item = parseWage(entity)}
		<div>
			<input id={item.id} name="wage_id" type="radio" value={item.id} required />
			<label for={item.id}>
				{item.commuting_hour_rate} - {item.working_hour_rate}
			</label>
		</div>
	</MultipleSelect>

	<input name="photo_id" type="file" accept=".jpg,.png,.jpeg" />

	<fieldset>
		<label>
			start date:
			<input type="date" name="start_at" min={new Date().getTime()} required />
		</label>

		<label>
			end date:
			<input type="date" name="end_at" required />
		</label>
	</fieldset>

	<button type="submit">submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		gap: 2rem;
		padding-top: 0.5rem;
	}
</style>
