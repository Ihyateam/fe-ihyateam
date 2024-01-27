<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import ActivityWidget from '$lib/components/ui/activity-widget.svelte';
	import BudgetContainer from '$lib/components/ui/widget-container.svelte';
	import BudgetWidget from '$lib/components/ui/budget-widget.svelte';

	const config = {
		ar: {
			title: 'الصفحة الرئيسية'
		}
	};

	export let data;
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<h1 slot="header">{config['ar'].title}</h1>

	<div slot="body">
		{#if data.user.isAdmin}
			<BudgetContainer>
				<BudgetWidget />
				<ActivityWidget />
			</BudgetContainer>
		{/if}

		<div dir="ltr">
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	</div>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}
</style>
