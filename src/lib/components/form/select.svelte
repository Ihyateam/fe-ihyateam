<script lang="ts">
	export let headerObj: {};
	export let arr: any[] = [];
	export let name: string;
	export let multi = false;
</script>

<fieldset {...$$restProps}>
	<table>
		<thead>
			<th role="rowheader">#</th>
			{#each Object.values(headerObj) as key}
				<th role="rowheader">{key}</th>
			{/each}
		</thead>
		<tbody>
			{#if arr.length === 0}
				<tr>
					<td colspan={Object.keys(headerObj).length + 1}>لا يوجد بيانات</td>
				</tr>
			{/if}
			{#each arr as row, id}
				<tr data-id={row.id}>
					<td>{id + 1}</td>
					<slot {row} />
					<input type={multi ? 'checkbox' : 'radio'} {name} value={row.id} />
				</tr>
			{/each}
		</tbody>
	</table>
</fieldset>

<style>
	tr:has(:checked) {
		background-color: var(--blue-color-3) !important;
		outline: 2px solid var(--blue-color-1);
		outline-offset: -0.25rem;
	}

	tr {
		position: relative;
	}

	input {
		position: absolute;
		left: 0;
		top: 0;
		appearance: none;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	:global(tbody > tr:not(:has(.active))) {
		background: oklch(from blue calc(l - 20%) c h) !important;
	}

	div {
		container: table / inline-size;
		width: 100%;
		max-height: calc(4rem * 8);
		height: auto;
		overflow: auto;

		border-radius: 10px;
		outline: var(--base-outline);
		background-color: var(--base-background-color);

		/* scrollbar-width: none; */
		overscroll-behavior: contain;
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
		cursor: pointer;

		&:nth-child(even) {
			background-color: hsla(0, 0%, 60%, 0.1);
		}

		&:not(:has(:checked)):hover {
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

	th:first-child {
		width: 4ch;
	}

	th {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	tr {
		& > td[data-cell]::before {
			display: none;
			content: attr(data-cell);
			font-weight: bold;
		}
	}

	@container table (width < 600px) {
		thead {
			display: none;
		}

		:global(tr > td:has(img)) {
			height: 10rem !important;
		}

		:global(tr > td > img) {
			height: 9rem !important;
			width: 9rem !important;
		}

		tr[data-id] > td:first-of-type {
			display: none;
		}

		tr {
			display: flex;
			flex-direction: column;
		}

		tr {
			& td[data-cell] {
				height: max-content;
				display: flex;
				justify-content: space-between;
			}

			& td[data-cell]::before {
				display: block !important;
			}
		}
	}
</style>
