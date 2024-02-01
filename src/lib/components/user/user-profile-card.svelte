<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import ActivityEdit from '../activity/activity-edit.svelte';

	export let user: UserEntity;

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
				tel: 'رقم الهاتف',
				mail: 'البريد الإلكتروني'
			},
			msg: 'فريق إحياء الشباب'
		}
	};
</script>

<div class="card">
	<div class="card__img">
		<img class="card__profile" src={getURL(user)} alt={user.username} />
	</div>
	<div class="card__info">
		<a
			href={`https://api.whatsapp.com/send/?phone=${user.telphone
				.replaceAll(' ', '')
				.trim()}&text=${config['ar'].msg}`}>{config['ar'].info['tel']}: +50382348234</a
		>
		<span>{config['ar'].info['mail']}: sadaki.abdulhadi@ihyateam.org</span>
		<span>{config['ar'].info['activities']}: {Math.floor(Math.random() * 100)}</span>
		<span>{config['ar'].info['hours']}: {Math.floor(Math.random() * 100)}</span>
		<span>{config['ar'].info['stocks']}: {Math.floor(Math.random() * 100)}</span>
		<span>{config['ar'].info['enroll_date']}: {user.created}</span>
		<span>{config['ar'].info['role']}: {config['ar'].role[user.isAdmin ? 'true' : 'false']}</span>
	</div>
	<div class="edit-btn">
		<ActivityEdit legend={true} />
	</div>
</div>

<style>
	div.edit-btn {
		position: absolute;
		inset-block-end: 1rem;
		inset-inline-end: 1rem;
	}

	div.card {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 4fr;

		/* lately added */
		background-color: aqua;
		outline: var(--base-outline);
		border-radius: 0.25rem;
		/* must be deleted */

		height: 20rem;

		overflow: hidden;
		& > .card__img {
			display: flex;
			padding: 0.5rem;
			overflow: hidden;

			& > img {
				object-fit: cover;
				border-radius: 0.5rem;
				box-shadow: var(--full-box-shadow);
			}
		}

		& > .card__info {
			display: flex;
			flex-direction: column;
			margin: 0.5rem 0 0.5rem 0.5rem;
			padding-inline-start: 0.5rem;

			& > span {
				display: flex;
				align-items: center;
				height: 100%;
			}
		}
	}
</style>
