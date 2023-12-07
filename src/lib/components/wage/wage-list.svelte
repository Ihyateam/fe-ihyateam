<script lang="ts">
	import { goto } from '$app/navigation';

	const config = {
		ar: {
			identifier: 'معرٌف الدخل',
			currency: 'العملة',
			work_hour_rate: 'بدل التطوع',
			commute_hour_rate: 'بدل المواصلات',
			created_date: 'تاريخ الإنشاء',
			created_by: 'المسؤول'
		}
	};

	export let wages: any[] = [];

	for (let x in { length: 20 }) {
		wages.push(...wages);
	}

	function applyAnchorBehavior(node: HTMLElement) {
		function handleClick() {
			goto(`/wages/id/${node.dataset.wageItem}`);
		}

		node.addEventListener('click', handleClick);

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	}
</script>

<div>
	<table>
		<thead>
			<th role="rowheader">#</th>
			{#each Object.values(config['ar']) as key}
				<th role="rowheader">{key}</th>
			{/each}
		</thead>
		<tbody>
			{#each wages as wage, id}
				<tr data-wage-item={wage.id} use:applyAnchorBehavior>
					<td>
						{id + 1}
					</td>
					<td>
						{wage.id}
					</td>
					<td>
						{wage.currency}
					</td>
					<td>
						{wage.working_hour_rate}
					</td>
					<td>
						{wage.commuting_hour_rate}
					</td>
					<td>
						{wage.created}
					</td>
					<td>
						{wage.updated}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	div {
		display: flex;
		width: 100%;
		max-height: 65svh;
		overflow: scroll;
		background: linear-gradient(180deg, red 0%, red 50%, yellowgreen 50%, yellowgreen 100%);
	}

	thead,
	tr {
		outline: 1px solid black;
	}

	tr:last-child {
		border-bottom: 2px solid black;
	}

	table {
		width: 100%;
	}

	thead,
	thead * {
		position: sticky; /* make the table heads sticky */
		top: 0px;
	}

	table,
	tbody {
		border-collapse: collapse;
	}

	thead {
		background-color: red;
	}

	tr {
		background-color: yellowgreen;

		&:hover {
			background-color: hsla(0, 100%, 80%, 0.8);
			cursor: pointer;
		}
	}

	th,
	td {
		padding: 0.5rem;
		text-align: center;
	}

	td {
		height: 3rem;
	}
</style>
