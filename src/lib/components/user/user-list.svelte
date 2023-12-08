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

	const config = {
		ar: {
			img: 'الصورة',
			id: 'معرف المستخدم',
			first_name: 'الاسم الأول',
			last_name: 'الاسم الأخير',
			username: 'اسم المستخدم',
			age: 'العمر',
			email: 'البريد الإلكتروني',
			created_by: 'المسؤول',
			status: 'الحالة'
		}
	};
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
			{#each users as user, id}
				<tr data-user-id={user.id} use:applyAnchorBehavior>
					<td>
						{id + 1}
					</td>
					<td>
						<img src={getURL(user)} alt={user.first_name} width="48px" height="48px" />
					</td>
					<td>
						{user.id}
					</td>
					<td>
						{user.first_name}
					</td>
					<td>
						{user.last_name}
					</td>
					<td>
						{user.username}
					</td>
					<td>
						{user.age}
					</td>
					<td>
						{user.email ?? '-'}
					</td>
					<td>
						{user.created_by}
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
	}

	img {
		object-fit: cover;
		border-radius: 10%;
	}
</style>
