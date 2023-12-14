<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';
	import { getURL } from '$lib/utils/backend-utils';
	import Table from '../layouts/table.svelte';
	import ActivityStatus from './activity-status.svelte';

	const config = {
		ar: {
			img: 'الصورة',
			id: 'معرف النشاط',
			title: 'العنوان',
			created_by: 'المسؤول',
			volunteers: 'المتطوعين',
			students: 'عدد الطلاب',
			wage_id: 'معرف البدل',
			city_id: 'معرف المدينة',
			start_date: 'تاريخ البدء',
			status: 'الحالة'
		}
	};

	export let activities: ActivityEntity[] = [];
</script>

<Table baseUrl="activities/id" headerObj={config['ar']} arr={activities} let:row>
	<td><img src={getURL(row)} alt={row.title} /></td>
	<td>{row.id}</td>
	<td>{row.title}</td>
	<td>{row.created_by}</td>
	<td>{row.volunteers.length}</td>
	<td>{row.students}</td>
	<td>{row.wage_id}</td>
	<td>{row.city_id}</td>
	<td>{dateFormater(new Date(row.start_date))}</td>
	<td class="flex justify-center align-center"><ActivityStatus activity={row} /></td>
</Table>

<style>
	.flex {
		display: flex;
	}
	.justify-center {
		justify-content: center;
	}
	.align-center {
		align-items: center;
	}
</style>
