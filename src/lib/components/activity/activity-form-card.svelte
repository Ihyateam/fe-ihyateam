<script lang="ts">
	import { enhance } from '$app/forms';
	import type { UserEntity, CityEntity, WageEntity, AcceptLang } from '$lib/types';
	import Input from '$lib/components/form/input.svelte';
	import Label from '$lib/components/form/label.svelte';
	import Select from '$lib/components/form/select.svelte';
	import { PhotoIcon } from '$lib/components/icons';
	import type { HttpMethod } from '@sveltejs/kit';
	import ActivitySave from './activity-save.svelte';
	import { getURL } from '$lib/utils/backend-utils';
	import { page } from '$app/stores';
	import UserStatus from '../user/user-status.svelte';

	let ProfileImgEl: HTMLImageElement;

	// <Label type="default" label="select a city for the activity (singular)">
	// <Label type="default" label="enroll volunteers in the activity (mutliple)">
	const config = {
		ar: {
			title: 'اسم الفعالية',
			description: 'وصف موجز للفعالية',
			users: {
				img: 'الصورة',
				id: 'معرف المستخدم',
				first_name: 'الاسم الأول',
				last_name: 'الاسم الأخير',
				username: 'اسم المستخدم',
				age: 'العمر',
				email: 'البريد الإلكتروني',
				status: 'الحالة'
			},
			users_selection: `اختر المتطوعين للمشاركة في الفعالية (متعدد)`,
			city_selection: `اختر مدينة للفعالية (واحدة)`,
			wage_selection: `اختر الأجر المناسب للفعالية (واحد)`
		},

		en: {
			title: 'activity title',
			description: 'activity description',
			users: {
				img: 'image',
				id: 'user id',
				first_name: 'first name',
				last_name: 'last name',
				username: 'username',
				age: 'age',
				email: 'email',
				status: 'status'
			},
			users_selection: `enroll volunteers in the activity (mutliple)`,
			city_selection: `select a city for the activity (singular)`,
			wage_selection: `select a wage for the activity (singular)`
		},

		de: {
			title: 'titel der aktivität',
			description: 'aktivitätsbeschreibung',
			users: {
				img: 'bild',
				id: 'benutzer-id',
				first_name: 'vorname',
				last_name: 'nachname',
				username: 'benutzername',
				age: 'alt',
				email: 'email',
				status: 'zustand'
			},
			users_selection: 'freiwillige für die aktivität einschreiben (mehrere)',
			city_selection: 'wählen sie eine stadt für die aktivität (einzahl)',
			wage_selection: 'wählen sie einen lohn für die aktivität (einzahl)'
		}
	};

	const handleImageChange = (e: Event) => {
		const [file] = (e.target as HTMLInputElement).files as FileList;

		if (file) {
			ProfileImgEl.src = URL.createObjectURL(file);
		}
	};

	function userParser(item: UserEntity) {
		return {
			id: item.id,
			name: `${item.first_name} ${item.last_name}`
		};
	}

	function parseCity(item: CityEntity) {
		return {
			id: item.id,
			name: item.city_name,
			country: item.country_id
		};
	}

	function parseWage(item: WageEntity) {
		return {
			id: item.id,
			commuting_hour_rate: item.commuting_hour_rate,
			working_hour_rate: item.working_hour_rate
		};
	}

	export let lang: AcceptLang = 'ar';
	export let action: string;
	export let method: HttpMethod = 'POST';
	export let volunteers: UserEntity[] = [];
	export let cities: CityEntity[] = [];
	export let wages: WageEntity[] = [];
</script>

<form {action} class="card" {method} use:enhance enctype="multipart/form-data">
	<div class="card__img">
		<img
			class="card__profile"
			src="/no-image.png"
			alt="new activity thumbnail"
			bind:this={ProfileImgEl}
		/>

		<label>
			<span>
				<PhotoIcon height="75%" width="2.5rem" />
			</span>
			<input type="file" name="photo" accept=".png, .jpg, .jpeg" on:change={handleImageChange} />
		</label>
	</div>

	<fieldset>
		<Label type="default" label={config[lang].title}>
			<Input name="title" />
		</Label>
		<Label type="default" label={config[lang].description}>
			<Input name="description" />
		</Label>

		<input type="date" name="end_at" />
		<input type="date" name="start_at" />

		<Label type="default" label={config[lang].users_selection}>
			<Select
				name="volutneers-list"
				arr={volunteers}
				headerObj={config[lang].users}
				multi={true}
				let:row
			>
				<td>
					<img
						class:admin={$page.data.user?.isAdmin && row.isAdmin}
						src={getURL(row)}
						alt={row.username}
					/>
				</td>
				<td data-cell={config[lang].users.id}>{row.id}</td>
				<td data-cell={config[lang].users.first_name}>{row.first_name}</td>
				<td data-cell={config[lang].users.last_name}>{row.last_name}</td>
				<td data-cell={config[lang].users.username}>{row.username}</td>
				<td data-cell={config[lang].users.age}>{row.age}</td>
				<td data-cell={config[lang].users.email}>{row.email || '-'}</td>
				<td data-cell={config[lang].users.status}><UserStatus user={row} /></td>
			</Select>
		</Label>

		<Label type="default" label={config[lang].city_selection}>
			<Select name="city_id" arr={cities} headerObj={{ id: 'identifier' }} let:row>
				{@const city = parseCity(row)}
				<td>
					{city.name}
				</td>
			</Select>
		</Label>

		<Label type="default" label={config[lang].city_selection}>
			<Select name="wage_id" arr={wages} headerObj={{ id: 'identifier' }} let:row>
				{@const wage = parseWage(row)}
				<td>
					{wage.working_hour_rate}/{wage.commuting_hour_rate}
				</td>
			</Select>
		</Label>
	</fieldset>

	<div class="try">
		<ActivitySave legend={true} />
	</div>
</form>

<style>
	img.admin {
		box-shadow: 0px 0px 6px 0px oklch(80% 0.31 70);
	}

	div.try {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-inline-end: 2rem;
		padding-block: 1rem;
	}

	form.card {
		container-type: inline-size;
		container-name: profile-card;

		position: relative;
		display: flex;
		flex-direction: column;
		align-items: stretch;

		/* lately added */
		background-color: var(--secondary-background-color);
		box-shadow: var(--base-box-shadow);
		outline: var(--base-outline);
		border-radius: 0.25rem;
		font-size: 1.25rem;
		min-height: fit-content;
		margin-bottom: 1rem;

		overflow: hidden;
	}

	.card__img {
		display: flex;
		justify-content: center;
		height: 20rem;
		width: 100%;
		overflow: hidden;
		outline: var(--base-outline);
		box-shadow: 0px 2px 8px 0px hsl(188, 100%, 38%, 0.5);
		position: relative;
	}

	img.card__profile {
		object-fit: cover;
		width: 100%;
	}

	.card__img > label {
		position: absolute;
		inset-block-end: 0;
		background-color: hsla(190, 2.4%, 48.2%, 0.5);
		backdrop-filter: blur(5px);
		color: hsla(0, 0%, 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		inline-size: 100%;
		block-size: 4rem;
		cursor: pointer;
	}

	.card__img > label:hover {
		background-color: hsla(190, 10%, 48.2%, 0.8);
	}

	input[type='file'] {
		display: none;
	}

	fieldset {
		outline: none;
		border: none;

		margin-inline: auto;
		margin-block-start: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		width: 80%;
	}

	/* 
	.card__info {
		display: grid;
		grid-auto-columns: 1fr 1fr;
		gap: 1rem;

		width: 100%;
		padding-inline: 1rem;

		margin-block: 2rem;
	}

	.edit-btn {
		justify-self: end;
	}

	.card__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.card__header > h2 {
		margin-block-start: 1rem;
	}

	.card__header > div {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--demphasized-font-color);
	}

	@container profile-card (width < 400px) {
		.edit-btn {
			justify-self: stretch;
		}
	} */
</style>
