<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';

	export let activity: ActivityEntity;
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
			<span>{activity.expand.created_by?.first_name}</span>
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
</div>

<style>
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
	}

	section {
		display: flex;
		align-items: center;
		grid-template-columns: 20ch 1fr;

		& > span:first-of-type {
			max-width: 20ch;
		}

		& > span {
			display: flex;
			align-items: center;
			padding-inline-start: 1rem;
			height: 100%;
			flex-grow: 1;
		}
	}

	@container balance (width < 550px) {
		.info {
			grid-template-columns: 1fr;
		}
	}
</style>
