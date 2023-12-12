<script lang="ts">
	import type { WageEntity } from '$lib/types';
	import Table from '$lib/components/layouts/Table.svelte';
	import { dateFormater } from '$lib/utils';

	const config = {
		ar: {
			identifier: 'معرٌف الدخل',
			currency: 'العملة',
			work_hour_rate: 'بدل التطوع',
			commute_hour_rate: 'بدل المواصلات',
			used: 'عدد الاستخدامات',
			created_date: 'تاريخ الإنشاء',
			created_by: 'المسؤول'
		}
	};

	export let wages: WageEntity[] = [];
</script>

<Table baseUrl="/wages/id" headerObj={config['ar']} arr={wages} let:row>
	<td>{row.id}</td>
	<td>{row.currency}</td>
	<td>{row.commuting_hour_rate}</td>
	<td>{row.working_hour_rate}</td>
	<td>{Math.floor(Math.random() * 20)}</td>
	<td>{dateFormater(new Date(row.created))}</td>
	<td>me</td>
</Table>
