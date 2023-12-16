<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';

	const config = {
		ar: {
			title: 'الصفحة الرئيسية'
		}
	};
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<h1 slot="header">{config['ar'].title}</h1>

	<div slot="body">
		<p>المحتوى</p>
	</div>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}
</style>
