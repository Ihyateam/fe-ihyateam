<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import Table from '../layouts/table.svelte';
	import UserStatus from './user-status.svelte';

	export let users: UserEntity[] = [];

	const config = {
		ar: {
			img: 'الصورة',
			id: 'معرف المستخدم',
			first_name: 'الاسم الأول',
			last_name: 'الاسم الأخير',
			username: 'اسم المستخدم',
			age: 'العمر',
			email: 'البريد الإلكتروني',
			status: 'الحالة'
		}
	};
</script>

<Table baseUrl="/admin/users/id" headerObj={config['ar']} arr={users} let:row>
	<td><img src={getURL(row)} alt={row.username} /></td>
	<td data-cell={config['ar'].id}>{row.id}</td>
	<td data-cell={config['ar'].first_name}>{row.first_name}</td>
	<td data-cell={config['ar'].last_name}>{row.last_name}</td>
	<td data-cell={config['ar'].username}>{row.username}</td>
	<td data-cell={config['ar'].age}>{row.age}</td>
	<td data-cell={config['ar'].email}>{row.email || '-'}</td>
	<td><UserStatus user={row} /></td>
</Table>
