<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ActivityEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
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

	function applyAnchorBehavior(node: HTMLElement) {
		function handleClick() {
			goto(`/activities/id/${node.dataset.activityId}`);
		}

		node.addEventListener('click', handleClick);

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	}

	const dateFormater = new Intl.DateTimeFormat('en-us');
	export let activities: ActivityEntity[] = [];
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
			{#each activities as activity, id}
				<tr data-activity-id={activity.id} use:applyAnchorBehavior>
					<td>
						{id + 1}
					</td>
					<td>
						<img src={getURL(activity)} alt={activity.title} width="48px" height="48px" />
					</td>
					<td>
						{activity.id}
					</td>
					<td>
						{activity.title}
					</td>
					<td>
						{activity.created_by}
					</td>
					<td>
						{activity.volunteers?.length}
					</td>
					<td>
						{activity.students}
					</td>
					<td>
						{activity.wage_id}
					</td>
					<td>
						{activity.city_id}
					</td>
					<td>
						{dateFormater.format(new Date(activity.start_date))}
					</td>
					<td>
						<ActivityStatus activityStatus={activity.status} />
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
		max-height: 70svh;
		overflow: scroll;

		border-radius: 10px;
		outline: var(--base-outline);

		scrollbar-width: none;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background-color: white;
		text-align: center;
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
		background-size: 20px;
		background-repeat: no-repeat;
		background-position: center;
		color: transparent;
	}

	td {
		height: 4rem;
	}

	tr {
		color: var(--demphasized-font-color);
		cursor: pointer;

		&:nth-child(even) {
			background-color: hsla(0, 0%, 60%, 0.1);
		}

		&:hover {
			background-color: var(--button-secondary-hover-background-color);
			outline: var(--base-outline);
		}
	}

	img {
		object-fit: cover;
		border-radius: 10%;
	}
</style>
