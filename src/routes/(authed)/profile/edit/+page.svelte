<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';
	import EditUserProfileCard from '$lib/components/user/edit-user-profile-card.svelte';

	export let data;
	const { isAdmin } = data;

	const config = {
		ar: {
			title: 'حساب'
		}
	};
</script>

<svelte:head>
	<title>
		{config['ar'].title} - {data.current_user.first_name}
		{data.current_user.last_name}
	</title>
</svelte:head>

<PageLayout>
	<UserProfileHeader user={data.current_user} slot="header" />
	<div slot="body">
		<EditUserProfileCard user={data.current_user} isCurrentUserAdmin={isAdmin} />
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
