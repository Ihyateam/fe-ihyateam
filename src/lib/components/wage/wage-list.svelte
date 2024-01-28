<script lang="ts">
	import type { WageEntity } from '$lib/types';
	import Table from '$lib/components/layouts/table.svelte';
	import { dateFormater } from '$lib/utils';

	const config = {
		ar: {
			identifier: 'معرٌف الدخل',
			currency: 'العملة',
			work_hour_rate: 'بدل التطوع',
			commute_hour_rate: 'بدل المواصلات',
			used: 'تم الاستخدام',
			created_date: 'تاريخ الإنشاء'
		}
	};

	export let wages: WageEntity[] = [];
</script>

<Table baseUrl="/admin/wages/id" headerObj={config['ar']} arr={wages} let:row>
	<td data-cell="id">{row.id}</td>
	<td data-cell="symbol">{row.expand.currency_id.symbol}</td>
	<td data-cell="commute">{row.commuting_hour_rate}</td>
	<td data-cell="working">{row.working_hour_rate}</td>
	<td data-cell="used">{Math.floor(Math.random() * 20)}</td>
	<td data-cell="created">{dateFormater(new Date(row.created))}</td>
</Table>
