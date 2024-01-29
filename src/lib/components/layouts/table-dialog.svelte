<script lang="ts">
	export let headerObj: {};
	export let arr: any[] = [];

	let xCoord: number | string = 0;
	let yCoord: number | string = 0;
	let isMenuOpen = false;
	let id: number | string = '';

	function applyAnchorBehavior(node: HTMLElement) {
		function handleClick() {
			console.log(node.dataset.id);
		}

		node.addEventListener('click', handleClick);

		node.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			isMenuOpen = true;
			id = node.dataset.id ?? 'no user';
			xCoord = e.clientX + 'px';
			yCoord = e.clientY + 'px';
		});

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	}
</script>

<div>
	<menu class:open={isMenuOpen} style:--x-coord={xCoord} style:--y-coord={yCoord}>
		<li>delete me</li>
		<li>update me</li>
		<li>pay it</li>
	</menu>

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

	menu.open {
		display: flex;
		flex-direction: column;
	}

	menu {
		z-index: 2;
		right: 120%;
		top: 60%;
		width: 12ch;
		height: max-content;
		background-color: white;

		list-style-type: none;
		border-radius: 0.25rem;
		font-size: 1.25rem;
		overflow: hidden;
		box-shadow: var(--base-box-shadow);

		outline: var(--base-outline);
		list-style-type: none;

		display: none;
		background-color: white;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(var(--x-coord), var(--y-coord));
		padding: 1rem;
	}

	menu > li {
		display: flex;

		width: 100%;
		position: relative;

		text-align: right;

		direction: rtl;

		&:hover {
			background-color: var(--hover-background-color);
			color: black;
			/* color: ; */
		}

		&:not(:last-of-type)::after {
			position: absolute;
			left: 12.5%;
			bottom: 0;
			content: ' ';
			width: 75%;
			height: 1px;
			background-color: var(--third-background-color);
		}

		& a {
			height: 100%;
			width: 100%;
			text-decoration: none;
			color: inherit;
		}

		& > * {
			padding: 0.25rem;
			padding-inline-start: 0.5rem;
			padding-inline-end: 0.5rem;
		}
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

	th:first-child {
		width: 4ch;
	}
</style>
