<script>
	import Table from '$lib/components/layouts/Table.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';

	let config = {
		ar: {
			user: 'المستفيد',
			comment: 'التعليق',
			createdAt: 'تاريخ المهمة',
			isPaid: 'تم الدفع'
		}
	};

	export let data;
</script>

<PageLayout>
	<header slot="header">
		<h2>Tasks</h2>
	</header>

	<svelte:fragment slot="body">
		<Table baseUrl="/users/id/" headerObj={config['ar']} arr={data.tasks ?? []} let:row>
			<td>{row.id}</td>
			<td>{row.comment}</td>
			<td>{row.at_date}</td>
			<td>{Math.random() > 0.5 ? 'نعم' : 'لا'}</td>
		</Table>
	</svelte:fragment>
</PageLayout>

<style>
	header[slot='header'] {
		display: flex;
		justify-content: center;
	}
</style>
