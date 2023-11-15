<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import { dateFormater } from '$lib/utils/date-formater';
	import { CalenderIcon, PupilsIcon } from '../icons';

	export let activity: any;

	const data = {
		done: 'انتهت',
		postponed: 'مؤجلة',
		scheduled: 'لم تبدأ',
		ongoing: 'مستمرة'
	};
</script>

<a
	dir={$lang === 'ar' ? 'rtl' : 'ltr'}
	class="activity activity__card"
	href="/activities/{activity.id}"
>
	<img src={activity.profile} alt={activity.name} />
	<div class="activity__details">
		<div class="activity__info">
			<span class="activity__date">
				{dateFormater(new Date(activity.start_date))}
				<CalenderIcon width="1rem" height="1rem" style="margin-bottom: 4px;" />
			</span>
			<span class="activity__status {activity.status}"
				>{$lang === 'ar' ? data[activity.status] : activity.status}</span
			>
		</div>
		<h2 class="activity__title">{activity.title}</h2>
		<p class="activity__description">{activity.description}</p>
		<footer>
			<div class="footer__div">
				<PupilsIcon height="1.4rem" width="1.4rem" />
				<p style="align-self: end;">{activity.students} طالب</p>
			</div>
		</footer>
	</div>
</a>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.activity__card {
		height: 100%;
		display: grid;
		grid-template-rows: 40% 60%;
		position: relative;
		color: black;
		text-decoration: none;
		text-align: right;
	}

	.activity__info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1.5rem;
	}

	.activity__details {
		display: flex;
		flex-direction: column;
		padding: 8px 12px 8px 12px;
		gap: 4px;
	}

	.activity__date {
		background-color: hsla(0, 0%, 80%, 0.5);
		border-radius: 4px;
		padding-left: 6px;
		padding-right: 6px;
		display: flex;
		grid-area: 1/2;
		align-items: center;
		justify-content: center;
		justify-self: left;
		font-size: 0.9rem;
		font-weight: 600;
		gap: 1px;
		color: hsla(0, 0%, 30%, 0.7);
	}

	.activity__status {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: right;

		width: max-content;
		padding: 0.1rem 0.6rem 0.1rem 0.6rem;
		margin-inline-start: 4px;

		color: hsl(0, 10%, 100%);
		border-radius: 6px;
	}

	.activity__title {
		margin-top: 8px;
	}

	.activity__description {
		margin-top: 4px;
		color: hsl(0, 0%, 40%);
	}

	footer {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: hsla(0, 0%, 10%, 0.7);
	}

	.footer__div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2px;
	}

	.postponed {
		background-color: hsla(217.6, 89.4%, 62.9%, 0.8);
	}

	.ongoing {
		background-color: hsla(150.7, 69.9%, 37.8%, 0.8);
	}

	.scheduled {
		background-color: hsla(43.8, 100%, 63.7%, 0.8);
	}

	.done {
		background-color: hsla(5.1, 69.2%, 56.7%, 0.8);
	}
	/* 
	* {
		outline: 1px solid salmon;
	} */
</style>
