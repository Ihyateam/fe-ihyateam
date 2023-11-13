<script>
	import ActivityList from '$lib/components/activity/activity-list.svelte';

	export let data;
</script>

<div class="main">
	<ActivityList activities={data.activities} />
</div>

<style>
	.main {
		background-color: var(--bodyColor);
		width: 100%;
		height: 100%;
		border-radius: 0;
	}
</style>
