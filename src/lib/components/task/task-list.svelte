<script lang="ts">
	import TableDialog from '$lib/components/layouts/table-dialog.svelte';

	export let tasks: any[] = [];
	const config = {
		ar: {
			user: 'المستفيد',
			comment: 'التعليق',
			createdAt: 'تاريخ المهمة',
			isPaid: 'تم الدفع'
		}
	};
</script>

<TableDialog headerObj={config['ar']} arr={tasks} let:row>
	<td>{row.id}</td>
	<td>{row.comment}</td>
	<td>{row.at_date}</td>
	<td>{Math.random() > 0.5 ? 'نعم' : 'لا'}</td>
</TableDialog>
