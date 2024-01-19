<script lang="ts">
	import TableDialog from '$lib/components/layouts/table-dialog.svelte';
	import type { CommuteEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';
	import PaymentStatus from './payment-status.svelte';

	export let arr: CommuteEntity[] = [];
	const config = {
		ar: {
			hours: 'ساعة مواصلات',
			activity_id: 'معرف النشاط',
			commute_date: 'التاريخ',
			payment_date: 'تاريخ الدفع',
			is_paid: 'تم الدفع'
		}
	};
</script>

<TableDialog headerObj={config['ar']} {arr} let:row>
	<td>{row.hours}</td>
	<td>{row.activity_id}</td>
	<td>{dateFormater(new Date(row.commute_date))}</td>
	<td>{row.payment_date || '-'}</td>
	<td><PaymentStatus is_paid={row.is_paid} /></td>
</TableDialog>
