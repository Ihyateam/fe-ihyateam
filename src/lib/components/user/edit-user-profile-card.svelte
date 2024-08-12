<script lang="ts">
	import { enhance } from '$app/forms';
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import ActivitySave from '../activity/activity-save.svelte';
	import Input from '../form/input.svelte';
	import Label from '../form/label.svelte';
	import { PhotoIcon } from '../icons';

	export let user: UserEntity;
	export let isCurrentUserAdmin: boolean = false;

	const config = {
		ar: {
			email: 'البريد الإلكتروني',
			role: {
				true: 'مسؤول',
				false: 'متطوع'
			},
			info: {
				updated: 'تاريخ التحديث',
				enroll_date: 'تاريخ الانضمام',
				role: 'العضوية',
				mail: 'البريد الإلكتروني'
			}
		}
	};

	const handleImageChange = (e: Event) => {
		const [file] = (e.target as HTMLInputElement).files as FileList;

		if (file) ProfileImg.src = URL.createObjectURL(file);
	};

	let ProfileImg: HTMLImageElement;
</script>

<form id="update-profile-form" class="card" method="POST" enctype="multipart/form-data" use:enhance>
	<div class="card__img">
		<img bind:this={ProfileImg} class="card__profile" src={getURL(user)} alt={user.username} />
		<label>
			<span>
				<PhotoIcon height="75%" width="1.5rem" />
			</span>
			<input type="file" name="photo" accept=".png, .jpg, .jpeg" on:change={handleImageChange} />
		</label>
	</div>

	<div class="card__info">
		<Label label="الاسم">
			<Input name="first_name" type="text" value={user.first_name} />
		</Label>
		<Label label="اللقب">
			<Input name="last_name" type="text" value={user.last_name} />
		</Label>
		<Label label={config['ar'].info['mail']}>
			<Input name="email" type="email" value={user.email} />
		</Label>
		<Label label="الهاتف">
			<Input
				name="telphone"
				type="tel"
				inputmode="numeric"
				value={user.telphone}
				pattern={`\\+\\d{10,}`}
			/>
		</Label>
		{#if isCurrentUserAdmin}
			<Label label="مسؤول">
				<Input name="isAdmin" checked={user.isAdmin} bind:value={user.isAdmin} type="checkbox" />
			</Label>
			<Label label="مفعل">
				<Input name="verified" checked={user.verified} bind:value={user.verified} type="checkbox" />
			</Label>
		{/if}
		<div class="edit-btn">
			<ActivitySave legend={true} type="submit" />
		</div>
	</div>
</form>

<style>
	form.card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block-start: 0.5rem;

		/* lately added */
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		border-radius: 0.25rem;
		font-size: 1.25rem;

		overflow: hidden;
	}

	.card__img {
		display: flex;
		justify-content: center;
		height: 15rem;
		width: 15rem;
		border-radius: 50%;
		overflow: hidden;
		outline: var(--base-outline);
		box-shadow: 0px 2px 8px 0px hsl(188, 100%, 38%, 0.5);
		position: relative;
	}

	input[type='file'] {
		display: none;
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
		block-size: 2rem;
		cursor: pointer;
	}

	.card__img > label:hover {
		background-color: hsla(190, 10%, 48.2%, 0.8);
	}

	.card__img > img {
		width: 100%;
		object-fit: cover;
	}

	.card__info {
		display: grid;
		grid-auto-columns: 1fr 1fr;
		gap: 1rem;

		width: 80%;
		/* padding-inline: 2rem; */

		margin-block: 2rem;
	}

	.edit-btn {
		justify-self: end;
	}
</style>
