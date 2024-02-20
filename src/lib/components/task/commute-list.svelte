<script lang="ts">
	import TableDialog from '$lib/components/layouts/table-dialog.svelte';
	import type { CommuteEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';
	import ActivityCell from './activity-cell.svelte';
	import PaymentStatus from './payment-status.svelte';

	export let arr: CommuteEntity[] = [];
	export let baseURL: string | undefined = undefined;

	const config = {
		ar: {
			hours: 'ساعة مواصلات',
			activity_id: 'معرف النشاط',
			at_date: 'التاريخ',
			payment_date: 'تاريخ الدفع',
			is_paid: 'تم الدفع'
		}
	};
</script>

<TableDialog headerObj={config['ar']} {baseURL} type="commutes" {arr} let:row>
	<td data-cell="hours">{row.hours}</td>
	<ActivityCell activity_id={row.activity_id} />
	<td data-cell="date">{dateFormater(new Date(row.at_date))}</td>
	<td data-cell="payment_date">{row.payment_date || '-'}</td>
	<td><PaymentStatus is_paid={row.is_paid} /></td>
</TableDialog>
