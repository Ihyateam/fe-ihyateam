<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import { dateFormater } from '$lib/utils/formaters';
	import { CalenderIcon, PupilsIcon } from '../icons';
	import ActivityStatus from './activity-status.svelte';

	export let activity: ActivityEntity;
</script>

<a class="activity activity__card" href="/activities/{activity.id}">
	<img src={getURL(activity)} alt={activity.title} />
	<div class="activity__details">
		<div class="activity__info">
			<span class="activity__date">
				{dateFormater(new Date(activity.start_at))}
				<CalenderIcon width="1rem" height="1rem" style="margin-bottom: 4px;" />
			</span>
			<ActivityStatus {activity} />
		</div>
		<h2 class="activity__title">{activity.title}</h2>
		<p class="activity__description">{activity.description}</p>
		<footer>
			<div class="footer__div">
				<PupilsIcon height="1.4rem" width="1.4rem" />
				<p style="align-self: end;">{Math.floor(Math.random() * 100)} طالب</p>
			</div>
		</footer>
	</div>
</a>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		outline: var(--base-outline);
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
		padding: 8px 12px;
		gap: 4px;
		& > * {
			min-width: 0;
			overflow: hidden;
			margin: 0;
		}
	}

	.activity__date {
		border-radius: 4px;
		padding-left: 6px;
		padding-right: 6px;
		display: flex;
		grid-area: 1/2;
		align-items: center;
		justify-self: left;
		font-weight: 600;
		gap: 1px;
		color: var(--demphasized-font-color-2);
		background-color: var(--third-background-color);
		outline: var(--base-outline);
	}

	.activity__title {
		margin-top: 8px;
		overflow: hidden;
		max-width: 16rem;
		text-overflow: ellipsis;
	}

	.activity__description {
		margin-top: 4px;
		color: var(--demphasized-font-color);
	}

	footer {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--demphasized-font-color-2);
	}

	.footer__div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2px;
	}
</style>
