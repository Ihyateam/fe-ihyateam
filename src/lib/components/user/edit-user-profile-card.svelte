<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';
	import { getURL } from '$lib/utils/backend-utils';
	import ActivitySave from '../activity/activity-save.svelte';
	import { EditIcon } from '../icons';
	import UserContactInfo from './user-contact-info.svelte';

	export let user: UserEntity;

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
</script>

<form class="card">
	<div class="card__img">
		<img class="card__profile" src={getURL(user)} alt={user.username} />
		<div>
			<button>
				<div>
					<span>edit</span>
					<EditIcon width="1.5rem" height="1.5rem" />
				</div>
			</button>
		</div>
	</div>
	<div class="card__header">
		<h2>{user.first_name} {user.last_name}</h2>
		<div>
			<span>{config['ar'].role[`${user.isAdmin}`]}</span> &bullet;
			<UserContactInfo {user} />
		</div>
	</div>
	<div class="card__info">
		<div>
			<span>{config['ar'].info['mail']}: {user.email ? user.email : '-'}</span>
		</div>
		<div>
			<span>{config['ar'].info['enroll_date']}: {dateFormater(new Date(user.created))}</span>
		</div>
		<div>
			<span>{config['ar'].info['updated']}: {dateFormater(new Date(user.updated))}</span>
		</div>
		<div class="edit-btn">
			<ActivitySave legend={true} />
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

	.card__img > div {
		position: absolute;
		inset-block-end: -10px;
		background-color: hsla(0, 0%, 100%, 0.8);
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 3rem;
	}

	.card__img > div:hover {
		background-color: white;
	}

	.card__img button {
		border: none;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 0.5rem;
		cursor: pointer;
		background-color: transparent;
	}

	.card__img button > div {
		margin-block-start: 0.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card__img > img {
		width: 100%;
		object-fit: cover;
	}

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
</style>
