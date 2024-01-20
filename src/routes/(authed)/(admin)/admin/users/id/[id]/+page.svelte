<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';

	import TaskList from '$lib/components/task/effort-list.svelte';
	import CommuteList from '$lib/components/task/commute-list.svelte';
	import UserProfileCard from '$lib/components/user/user-profile-card.svelte';

	export let data;
	const config = {
		ar: {
			title: {
				role: data.current_user?.isAdmin ? 'مسؤول' : 'متطوع'
			}
		}
	};
</script>

<svelte:head>
	<title>
		{config['ar'].title.role} - {data.current_user?.first_name}
		{data.current_user?.last_name}
	</title>
</svelte:head>

<PageLayout>
	<UserProfileHeader user={data.current_user} slot="header" />
	<div slot="body">
		<UserProfileCard user={data.current_user} />
		<div>
			<h2>المهام المنجزة</h2>
			<TaskList arr={data?.efforts} />
		</div>
		<div>
			<h2>المواصلات</h2>
			<CommuteList arr={data?.commutes} />
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
