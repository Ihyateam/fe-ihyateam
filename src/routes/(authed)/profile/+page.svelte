<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';
	import UserProfileCard from '$lib/components/user/user-profile-card.svelte';
	import TaskList from '$lib/components/task/effort-list.svelte';
	import CommuteList from '$lib/components/task/commute-list.svelte';

	export let data;
	const { user, efforts, commutes } = data;

	const config = {
		ar: {
			title: 'حساب'
		}
	};

	const hours = [...data.efforts, ...data.commutes].reduce((acc, curr) => (acc += curr.hours), 0);

	const metrics = {
		activity: data.activities?.length ?? 0,
		hours,
		stocks: 0
	};
</script>

<svelte:head>
	<title>
		{config['ar'].title} - {user.first_name}
		{user.last_name}
	</title>
</svelte:head>

<PageLayout>
	<UserProfileHeader {user} slot="header" />
	<div slot="body">
		<UserProfileCard user={data.current_user} {metrics} />
		<div>
			<h2>المهام المنجزة</h2>
			<TaskList baseURL="hours" arr={data?.efforts} />
		</div>
		<div>
			<h2>المواصلات</h2>
			<CommuteList baseURL="hours" arr={data?.commutes} />
		</div>
	</div>
</PageLayout>

<style>
	div[slot='body'] {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
