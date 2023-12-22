<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	const showPageData = writable<unknown>();
</script>

<script>
	import { page } from '$app/stores';
	import { useShallowRouting } from '$lib/utils/useShallowRouting';

	import ActivityList from '$lib/components/activity/activity-list.svelte';
	import NewItemIcon from '$lib/components/icons/new-item-icon.svelte';
	import PageDialog from '$lib/components/layouts/page-dialog.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import NewActivityPage from '../create/activity/+page.svelte';

	let config = {
		ar: {
			title: 'الأنشطة',
			activites: 'الأنشطة',
			new_activity: 'نشاط جديد'
		}
	};

	export let data;
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>{data.activites?.length} {config['ar'].activites}</span>
		<a href="/create/activity" target="_self" use:useShallowRouting={{ data: showPageData }}>
			{config['ar'].new_activity}
			<NewItemIcon width="24px" height="24px" />
		</a>
	</header>
	<div slot="body">
		<ActivityList activities={data.activites} />
	</div>
</PageLayout>
{#if $page.state.showPage}
	<PageDialog on:close={() => history.back()}>
		<NewActivityPage data={$showPageData} />
	</PageDialog>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2rem;

		& > a {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.5rem 0 0.5rem 0;
			width: 20ch;
			gap: 0.25rem;
			border-radius: 0.5rem;
			text-decoration: none;
			background-color: var(--secondary-background-color);
			color: var(--accent-color);

			&:hover {
				background-color: var(--gold-color-1);
			}
		}
	}

	[slot='body'] {
		flex-direction: column;
		height: min(max-content, 75svh);
	}
</style>
