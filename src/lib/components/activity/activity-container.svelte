<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';
	import { LinkIcon } from '../icons';
	import ActivityEdit from './activity-edit.svelte';

	export let activity: ActivityEntity;
	export let editable: boolean = false;

	const config = {
		ar: {
			start_at: 'تاريخ بدأ الفعالية',
			end_at: 'تاريخ انتهاء الفعالية',
			created_by: 'مسؤول النشاط',
			description: 'الوصف',
			city: 'المدينة',
			wage_id: 'بدل تطوع',
			updated_at: 'تاريخ أخر تحديث'
		}
	};
</script>

<div class="container">
	<div class="info">
		<section>
			<span>{config['ar'].start_at}:</span>
			<span>{dateFormater(new Date(activity.start_at))}</span>
		</section>
		<section>
			<span>{config['ar'].end_at}:</span>
			<span>{dateFormater(new Date(activity.end_at))}</span>
		</section>
		<section>
			<span>{config['ar'].created_by}:</span>
			<a href="/admin/users/id/{activity.expand.created_by?.id}">
				<span>{activity.expand.created_by?.first_name} {activity.expand.created_by?.last_name}</span
				>
				<LinkIcon width="1.5rem" height="1.5rem" />
			</a>
		</section>
		<section>
			<span>{config['ar'].city}:</span>
			<span>{activity.expand.city_id?.city_name}</span>
		</section>
		<section>
			<span>{config['ar'].wage_id}:</span>
			<span>
				{activity.expand.wage_id?.working_hour_rate ?? 'NaN'}/{activity.expand.wage_id
					?.commuting_hour_rate ?? 'NaN'}
			</span>
		</section>
		<section>
			<span>{config['ar'].updated_at}:</span>
			<span>{dateFormater(new Date(activity.updated))}</span>
		</section>
	</div>
	{#if editable}
		<div class="edit-btn">
			<ActivityEdit legend={true} />
		</div>
	{/if}
</div>

<style>
	a {
		border-radius: 8px;
		gap: 0.25rem;
		text-decoration: none;
		color: currentColor;
		padding-inline-start: 0.75rem;
		padding-inline-end: 0.25rem;
		padding-block: 0.15rem;

		display: flex;
		align-items: center;
		cursor: alias;
		color: currentColor;
		text-decoration: none;
		font-weight: 500;
		background-color: hsla(186, 62%, 62%, 0.3);
	}

	a:hover {
		background-color: var(--gold-color-1);
		outline: 2px dashed black;
		outline-offset: 2px;
	}

	.container {
		container-name: balance;
		container-type: inline-size;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);
		padding: 2rem;
		min-height: 300px;
		border-radius: 4px;
		overflow: auto;
		display: flex;
	}

	.info {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(auto-fit, minmax(0px, 1fr));
		margin-block-end: 2rem;
	}

	section {
		display: flex;
		align-items: center;
		grid-template-columns: 20ch 1fr;
	}

	section > span:first-of-type {
		width: 20ch;
		max-width: 20ch;
	}

	section > span {
		display: flex;
		align-items: center;
		padding-inline-start: 1rem;
		height: 100%;
		flex-grow: 1;
	}

	.edit-btn {
		position: absolute;
		inset-block-end: 1.5rem;
		inset-inline-end: 2rem;
	}

	@container balance (width < 550px) {
		.info {
			grid-template-columns: 1fr;
			margin-block-end: 2rem;
		}

		.edit-btn {
			inset-inline-start: 2rem;
		}

		section > span:first-of-type {
			max-width: 15ch;
		}
	}
</style>
