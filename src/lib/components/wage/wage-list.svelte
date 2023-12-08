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
		overflow-y: scroll;
		overflow-x: hidden;

		border-radius: 10px;
		outline: var(--base-outline);
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background-color: white;
	}

	thead {
		background-color: var(--secondary-background-color);
		position: sticky;
		top: 0px;
	}

	th,
	td {
		padding: 0.5rem;
	}

	th:first-of-type {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iLTUgLTUgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYgNnYyaDJWNkg2em0wLTJoMlYxYTEgMSAwIDEgMSAyIDB2M2gzYTEgMSAwIDAgMSAwIDJoLTN2MmgzYTEgMSAwIDAgMSAwIDJoLTN2M2ExIDEgMCAwIDEtMiAwdi0zSDZ2M2ExIDEgMCAwIDEtMiAwdi0zSDFhMSAxIDAgMSAxIDAtMmgzVjZIMWExIDEgMCAxIDEgMC0yaDNWMWExIDEgMCAxIDEgMiAwdjN6Ii8+PC9zdmc+');
		background-size: 65%;
		background-repeat: no-repeat;
		background-position: center;
		color: transparent;
	}

	td {
		height: 4rem;
	}

	tr {
		cursor: pointer;
		text-align: center;

		&:nth-child(even) {
			background-color: hsla(0, 0%, 60%, 0.1);
		}

		&:hover {
			background-color: var(--button-secondary-hover-background-color);
			outline: var(--base-outline);
		}
	}
</style>
