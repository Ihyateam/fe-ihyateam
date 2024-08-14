<script lang="ts">
	import type { AcceptLang } from '$lib/types';

	import PageLayout from '$lib/components/layouts/page-layout.svelte';

	import ActivityHeader from '$lib/components/activity/activity-header.svelte';
	import ActivityFormCard from '$lib/components/activity/activity-form-card.svelte';

	const activity = {
		title: 'activity title',
		id: 'activity id',
		city_id: 'cityid',
		created_by: 'created by',
		description: 'activity description',
		wage_id: 'sljdhf',
		created_at: 'created at',
		students: 33
	};

	export let data;
	export let lang: AcceptLang = 'ar';
</script>

<PageLayout>
	<svelte:fragment slot="header">
		<ActivityHeader {activity} {lang} />
	</svelte:fragment>

	<!-- <h2 slot="header">{config[lang].header}</h2> -->

	<svelte:fragment slot="body">
		<ActivityFormCard action="?/createActivity" {...data} />
	</svelte:fragment>
</PageLayout>
