<script lang="ts">
	import { goto } from '$app/navigation';

	export let baseUrl: string;
	export let arr: any[] = [];

	function applyAnchorBehavior(node: HTMLElement) {
		function handleClick() {
			goto(`${baseUrl}/${node.dataset.itemId}`);
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
			{#each Object.keys(arr[0]) as key}
				<th role="rowheader">{key}</th>
			{/each}
		</thead>
		<tbody>
			{#each arr as item, id}
				<tr data-item-id={item.id} use:applyAnchorBehavior>
					<td>
						{id + 1}
					</td>
					{#each Object.values(item) as value}
						<td>
							{value}
						</td>
					{/each}
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
		background-size: 65%;
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

		& img {
			object-fit: cover;
			border-radius: 10%;
		}
	}
</style>
