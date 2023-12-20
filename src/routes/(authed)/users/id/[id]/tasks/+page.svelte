<script lang="ts">
	import { page } from '$app/stores';
	import { NewTaskIcon } from '$lib/components/icons';

	import NewTaskPage from './new/+page.svelte';
	import PageDialog from '$lib/components/layouts/page-dialog.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import TaskList from '$lib/components/task/task-list.svelte';
	import { preloadData, pushState } from '$app/navigation';

	async function handleNewTaskDialog(e: MouseEvent) {
		e.preventDefault();
		const { href } = e.currentTarget as HTMLAnchorElement;
		pushState(href, { showPage: !$page.state.showPage });
	}

	const config = {
		ar: {
			title: 'مهامي',
			tasks: 'مهمة',
			new_task: 'مهمة جديدة'
		}
	};

	export let data;
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>{data.tasks?.length} {config['ar'].tasks}</span>
		{#if $page.params.id === data.user.id}
			<a href="{$page.url.href}/new" on:click={handleNewTaskDialog}>
				{config['ar'].new_task}
				<NewTaskIcon width="22px" height="22px" />
			</a>
		{/if}
	</header>

	<div slot="body">
		<TaskList tasks={data.tasks} />
	</div>
</PageLayout>

{#if $page.state.showPage}
	<PageDialog on:close={() => history.back()}>
		<NewTaskPage />
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
				outline: 2px solid var(--gold-color);
			}
		}
	}
</style>
