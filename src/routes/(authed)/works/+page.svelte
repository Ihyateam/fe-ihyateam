<script lang="ts">
	import { page } from '$app/stores';
	import { NewTaskIcon } from '$lib/components/icons';
	import { useShallowRouting } from '$lib/utils/useShallowRouting';

	import NewTaskPage from './new/task/+page.svelte';
	import CommuteTaskPage from './new/commute/+page.svelte';

	import PageDialog from '$lib/components/layouts/page-dialog.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import TaskList from '$lib/components/task/effort-list.svelte';
	import { writable } from 'svelte/store';
	import CommuteList from '$lib/components/task/commute-list.svelte';

	const config = {
		ar: {
			title: 'مهامي',
			tasks: 'مهمة',
			commute: 'تنقل',
			new_task: 'مهمة جديدة',
			new_commute: 'تنقل جديد'
		}
	};

	export let data;
	const { efforts, commutes } = data;
	const pageData = writable({});
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>مهامي</span>
	</header>

	<div slot="body">
		<div class="table-container">
			<div class="table__header">
				<span>{data.efforts?.length} {config['ar'].tasks}</span>
				<a href="{$page.url.href}/new/task" use:useShallowRouting={{ data: pageData }}>
					{config['ar'].new_task}
					<NewTaskIcon width="22px" height="22px" />
				</a>
			</div>
			<TaskList arr={efforts} />
		</div>

		<div class="table-container">
			<div class="table__header">
				<span>{data.commutes?.length} {config['ar'].commute}</span>
				<a href="{$page.url.href}/new/commute" use:useShallowRouting={{ data: pageData }}>
					{config['ar'].new_commute}
					<NewTaskIcon width="22px" height="22px" />
				</a>
			</div>
			<CommuteList arr={commutes} />
		</div>
	</div>
</PageLayout>

{#if $page.state.showPage}
	<PageDialog on:close={() => history.back()}>
		<svelte:component this={NewTaskPage} data={$pageData} />
		<!-- <NewTaskPage data={$pageData} /> -->
	</PageDialog>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2rem;
	}

	[slot='body'] {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.table__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2rem;
		margin-bottom: 0.75rem;
	}

	a {
		position: relative;
		display: flex;
		justify-content: center;
		cursor: pointer;
		border: none;
		align-items: center;
		padding: 0.5rem 0 0.5rem 0;
		width: 20ch;
		gap: 0.25rem;
		border-radius: 0.5rem;
		text-decoration: none;
		background-color: var(--secondary-background-color);
		color: var(--accent-color);
		transition: background-color 0.2s ease;

		&:hover {
			background-color: var(--gold-color-1);
		}
	}
</style>
