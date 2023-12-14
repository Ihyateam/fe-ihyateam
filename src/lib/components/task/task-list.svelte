<div>
	<table>
		<thead>
			<th>ID</th>
			<th>Task</th>
			<th>Date</th>
			<th>IsPaid</th>
			<th>Amount</th>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>isdhfksdf</td>
				<td>{new Intl.DateTimeFormat('en-us').format(new Date())}</td>
				<td>false</td>
				<td>200</td>
			</tr>
			<tr>
				<td>3</td>
				<td>i3dhfksdf</td>
				<td>{new Intl.DateTimeFormat('en-us').format(new Date())}</td>
				<td>f3lse</td>
				<td>230</td>
			</tr>
			<tr>
				<td>3</td>
				<td>i3dhfksdf</td>
				<td>{new Intl.DateTimeFormat('en-us').format(new Date())}</td>
				<td>f3lse</td>
				<td>230</td>
			</tr>
			<tr>
				<td>3</td>
				<td>i3dhfksdf</td>
				<td>{new Intl.DateTimeFormat('en-us').format(new Date())}</td>
				<td>f3lse</td>
				<td>230</td>
			</tr>
			<tr>
				<td>3</td>
				<td>i3dhfksdf</td>
				<td>{new Intl.DateTimeFormat('en-us').format(new Date())}</td>
				<td>f3lse</td>
				<td>230</td>
			</tr>
			<tr>
				<td>3</td>
				<td>i3dhfksdf</td>
				<td>{new Intl.DateTimeFormat('en-us').format(new Date())}</td>
				<td>f3lse</td>
				<td>230</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	div {
		overflow: auto;

		max-height: calc(5 * 4rem + 2rem);
		height: fit-content;
		border-radius: 10px;
		outline: var(--base-outline);

		scrollbar-width: none;
		background-color: white;
	}

	table {
		width: 100%;
		border-collapse: collapse;
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

		&:last-child {
			border-bottom: 0.5px dashed var(--base-border-color);
		}
	}
</style>
