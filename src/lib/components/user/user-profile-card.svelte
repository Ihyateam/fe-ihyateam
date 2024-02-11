<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';
	import { getURL } from '$lib/utils/backend-utils';
	import ActivityEdit from '../activity/activity-edit.svelte';
	import UserContactInfo from './user-contact-info.svelte';

	export let user: UserEntity;
	export let metrics: {
		activity: number;
		hours: number;
		stocks: number;
	} = { stocks: 0, hours: 0, activity: 0 };

	const config = {
		ar: {
			email: 'البريد الإلكتروني',
			age: 'العمر',
			role: {
				true: 'مسؤول',
				false: 'متطوع'
			},
			info: {
				activities: 'الفعاليات',
				hours: 'ساعات العمل',
				stocks: 'الأسهم',
				enroll_date: 'تاريخ الانضمام',
				role: 'العضوية',

				mail: 'البريد الإلكتروني'
			}
		}
	};
</script>

<div class="card">
	<div class="card__img">
		<img class="card__profile" src={getURL(user)} alt={user.username} />
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
			<span>{config['ar'].info['activities']}: {metrics.activity}</span>
		</div>
		<div>
			<span>{config['ar'].info['hours']}: {metrics.hours}</span>
		</div>
		<div>
			<span>{config['ar'].info['stocks']}: {metrics.stocks}</span>
		</div>
		<div>
			<span>{config['ar'].info['enroll_date']}: {dateFormater(new Date(user.created))}</span>
		</div>
		<div class="edit-btn">
			<ActivityEdit legend={true} />
		</div>
	</div>
</div>

<style>
	div.card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block-start: 0.5rem;

		/* lately added */
		background-color: var(--secondary-background-color);
		box-shadow: var(--base-box-shadow);
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
