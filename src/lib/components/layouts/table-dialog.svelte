<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let headerObj: {};
	export let arr: any[] = [];
	export let type: 'tasks' | 'commutes';
	export let baseURL: string | undefined = undefined;

	function applyAnchorBehavior(node: HTMLElement) {
		function handleClick() {
			goto(`${baseURL ?? $page.url}/${type}/${node.dataset.id}`);
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
			{#each Object.values(headerObj) as key}
				<th role="rowheader">{key}</th>
			{/each}
		</thead>
		<tbody class:hoverable={arr.length !== 0}>
			{#if arr.length === 0}
				<tr>
					<td colspan={Object.keys(headerObj).length + 1}>لا يوجد بيانات</td>
				</tr>
			{/if}
			{#each arr as row, id}
				<tr data-id={row.id} use:applyAnchorBehavior>
					<td>{id + 1}</td>
					<slot {row} />
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	div {
		width: 100%;
		max-height: 70svh;
		height: fit-content;
		overflow: auto;

		border-radius: 10px;
		outline: var(--base-outline);
		background-color: var(--base-background-color);

		scrollbar-width: none;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		text-align: center;
	}

	thead {
		background-color: var(--secondary-background-color);
		height: 2.5rem;
		position: sticky;
		top: 0px;
	}

	th:first-of-type {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iLTUgLTUgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYgNnYyaDJWNkg2em0wLTJoMlYxYTEgMSAwIDEgMSAyIDB2M2gzYTEgMSAwIDAgMSAwIDJoLTN2MmgzYTEgMSAwIDAgMSAwIDJoLTN2M2ExIDEgMCAwIDEtMiAwdi0zSDZ2M2ExIDEgMCAwIDEtMiAwdi0zSDFhMSAxIDAgMSAxIDAtMmgzVjZIMWExIDEgMCAxIDEgMC0yaDNWMWExIDEgMCAxIDEgMiAwdjN6Ii8+PC9zdmc+');
		background-size: 65%;
		background-repeat: no-repeat;
		background-position: center;
		color: transparent;
	}

	tr {
		color: var(--demphasized-font-color);

		&:nth-child(even) {
			background-color: hsla(0, 0%, 60%, 0.1);
		}

		&:hover {
			background-color: var(--button-secondary-hover-background-color);
			outline: var(--base-outline);
		}

		& img {
			object-fit: cover;
			height: 3rem;
			width: 3rem;
			border-radius: 10%;
		}

		& > td {
			height: 4rem;
			padding: 0.5rem;
		}

		&:last-child {
			border-bottom: 0.5px dashed var(--base-border-color);
		}
	}

	tbody.hoverable tr:hover {
		cursor: pointer;
	}

	th:first-child {
		width: 4ch;
	}
</style>
