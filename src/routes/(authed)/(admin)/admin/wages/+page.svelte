<script>
	import { NewWageIcon } from '$lib/components/icons';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import WageList from '$lib/components/wage/wage-list.svelte';
	import { useShallowRouting } from '$lib/utils/useShallowRouting';
	import { page } from '$app/stores';
	import PageDialog from '$lib/components/layouts/page-dialog.svelte';
	import NewWagePage from '../../create/wage/+page.svelte';

	export let data;
	let config = {
		ar: {
			title: 'الأجور',
			wages: 'الأجور',
			new_wage: 'عنصر جديد'
		}
	};
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>{data.wages?.length} {config['ar'].wages}</span>
		<a href="/create/wage/" target="_self" use:useShallowRouting>
			{config['ar'].new_wage}
			<NewWageIcon width="24px" height="24px" />
		</a>
	</header>
	<div slot="body">
		<WageList wages={data.wages} />
	</div>
</PageLayout>

{#if $page.state.showPage}
	<PageDialog on:close={() => history.back()}>
		<NewWagePage />
	</PageDialog>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
</style>
