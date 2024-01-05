<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';

	export let data;
	const config = {
		ar: {
			title: {
				role: data.current_user?.isAdmin ? 'المدير' : 'المتطوع'
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
		<p>some content</p>
	</div>
</PageLayout>

<style>
	[slot='body'] {
		display: none;
	}
</style>
