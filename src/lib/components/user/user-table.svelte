<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import UserCard from './user-card.svelte';

	export let users: UserEntity[];
</script>

<ul>
	<li class="header">
		<header>
			<div />
			<span>الاسم</span>
			<span>الهاتف</span>
			<span>الفعاليات</span>
			<span>ساعات تطوع</span>
			<span>الحالة</span>
		</header>
	</li>
	{#each users as user}
		<li>
			<UserCard id={user.id}>
				<img class="profile" slot="avater" alt={user.first_name} src={getURL(user)} />
				<span slot="name">{user.first_name} {user.last_name}</span>
				<span slot="tel">{user.username}</span>
				<span slot="activities">{Math.floor(Math.random() * 100)}</span>
				<span slot="work-commute">{Math.floor(Math.random() * 100)}</span>
				<div slot="status" class:active={user.isActive}>{user.isActive ? 'فعال' : 'معطل'}</div>
			</UserCard>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		border: 1px solid hsla(0, 0%, 30%, 0.2);
		border-radius: 0.5rem;
		overflow: auto;
	}

	li {
		height: 4rem;
		border-bottom: 1px solid hsla(0, 0%, 30%, 0.2);
	}

	.header {
		height: 2rem;
		background-color: hsla(0, 10%, 95%, 0.8);
	}

	header {
		width: 100%;
		height: 2rem;
		gap: 1.5rem;
		display: grid;
		grid-template-columns: 3rem repeat(4, 1fr) 3rem;
		align-items: center;
		justify-items: center;
		padding: 0 1rem 0 1rem;
		border-bottom: 1px solid hsla(0, 0%, 30%, 0.2);
		color: hsla(0, 0%, 20%, 0.8);

		& > span {
			justify-self: right;
		}
	}

	[slot='status'].active {
		background-color: hsl(150.7, 69.9%, 37.8%);
	}
</style>
