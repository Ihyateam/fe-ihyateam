<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import BudgetContainer from '$lib/components/widgets/widget-container.svelte';
	import MetricsWidget from '$lib/components/widgets/metrics-widget.svelte';
	import TopUsersWidget from '$lib/components/widgets/top-users-widget.svelte';

	export let data;
	// const { user } = data;

	const config = {
		ar: {
			title: 'الصفحة الرئيسية'
		}
	};

	const widgets = [{ Widget: MetricsWidget, props: { ...data.metrics } }];

	// const privateWidgets = [{ Widget: TopUsersWidget, props: { ...data.metrics } }];
	// && widgets.push(...privateWidgets)

	// data.user.isAdmin;
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<h1 slot="header">{config['ar'].title}</h1>

	<div slot="body">
		<BudgetContainer>
			{#each widgets as { Widget, props } (props)}
				<Widget {props} />
			{/each}
		</BudgetContainer>
	</div>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}
</style>
