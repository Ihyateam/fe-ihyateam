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
			used: 'عدد الاستخدامات',
			created_date: 'تاريخ الإنشاء'
		}
	};

	export let wages: WageEntity[] = [];
</script>

<Table baseUrl="/wages/id" headerObj={config['ar']} arr={wages} let:row>
	<td>{row.id}</td>
	<td>{row.expand.currency_id.symbol}</td>
	<td>{row.commuting_hour_rate}</td>
	<td>{row.working_hour_rate}</td>
	<td>{Math.floor(Math.random() * 20)}</td>
	<td>{dateFormater(new Date(row.created))}</td>
</Table>
