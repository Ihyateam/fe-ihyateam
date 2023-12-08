<script lang="ts">
	import { goto } from '$app/navigation';
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import UserStatus from './user-status.svelte';

	function applyAnchorBehavior(node: HTMLElement) {
		function handleClick() {
			goto(`/users/id/${node.dataset.userId}`);
		}

		node.addEventListener('click', handleClick);

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	}

	export let users: UserEntity[];
	for (let x in { length: 4 }) {
		users.push(...users);
	}
</script>

<div>
	<table>
		<thead>
			<th>img</th>
			<th>first name</th>
			<th>last name</th>
			<th>created by</th>
			<th>created at</th>
			<th>status</th>
		</thead>
		<tbody>
			{#each users as user}
				<tr data-user-id={user.id} use:applyAnchorBehavior>
					<td>
						<img src={getURL(user)} alt={user.first_name} width="48px" height="48px" />
					</td>
					<td>
						{user.first_name}
					</td>
					<td>
						{user.last_name}
					</td>
					<td>
						{user.created_by}
					</td>
					<td>
						{user.created}
					</td>
					<td>
						<UserStatus isActive={user.isActive} />
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
		overflow-y: scroll;
		overflow-x: hidden;

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

	td {
		height: 4rem;
	}

	tr {
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
