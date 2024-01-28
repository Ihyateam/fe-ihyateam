<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';
	import { getURL } from '$lib/utils/backend-utils';
	import Table from '$lib/components/layouts/table.svelte';
	import ActivityStatus from './activity-status.svelte';

	const config = {
		ar: {
			img: 'الصورة',
			id: 'معرف النشاط',
			title: 'العنوان',
			start_at: 'تاريخ البدء',
			end_at: 'تاريخ الانتهاء',
			wage_id: 'معرف البدل',
			city_id: 'معرف المدينة',
			status: 'الحالة'
		}
	};

	export let activities: ActivityEntity[] = [];
</script>

<Table baseUrl="activities/id" headerObj={config['ar']} arr={activities} let:row>
	<td><img src={getURL(row)} alt={row.title} /></td>
	<td data-cell="id">{row.id}</td>
	<td data-cell="title">{row.title}</td>
	<td data-cell="start">{dateFormater(new Date(row.start_at))}</td>
	<td data-cell="end">{dateFormater(new Date(row.end_at))}</td>
	<td data-cell="wage">{row.wage_id}</td>
	<td data-cell="city">{row.city_id}</td>
	<td><ActivityStatus activity={row} /></td>
</Table>
