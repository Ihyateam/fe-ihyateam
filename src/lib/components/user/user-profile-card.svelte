<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';

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
			}
			// max-width: 20ch
		}
	};
</script>

<div class="card">
	<div class="card__img">
		<img class="card__profile" src={getURL(user)} alt={user.username} />
	</div>
	<div class="card__info">
		<a href={`https://api.whatsapp.com/send/?phone=+905375259965&text=merhaba`}
			>{config['ar'].info['tel']}: +50382348234</a
		>
		<span>{config['ar'].info['mail']}: sadaki.abdulhadi@ihyateam.org</span>
		<span>{config['ar'].info['activities']}: {Math.floor(Math.random() * 100)}</span>
		<span>{config['ar'].info['hours']}: {Math.floor(Math.random() * 100)}</span>
		<span>{config['ar'].info['stocks']}: {Math.floor(Math.random() * 100)}</span>
		<span>{config['ar'].info['enroll_date']}: {user.created}</span>
		<span>{config['ar'].info['role']}: {config['ar'].role[user.isAdmin]}</span>
	</div>
</div>

<style>
	div.card {
		display: grid;
		grid-template-columns: 2fr 4fr;

		/* lately added */
		background-color: aqua;
		outline: var(--base-outline);
		border-radius: 0.25rem;
		/* must be deleted */

		overflow: hidden;
		& > .card__img {
			display: flex;
			width: 100%;
			height: 100%;
			padding: 0.5rem;
			overflow: hidden;

			& > img {
				width: 100%;
				height: 100%;
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
