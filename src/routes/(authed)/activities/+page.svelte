<script>
	import ActivityList from '$lib/components/activity/activity-list.svelte';

	export let data;
</script>

<ActivityList activities={data.activities} />
