<script>
	import ActivityForm from './activity-form.svelte';

	export let data;
	$: console.log(data);
</script>

<h2>Create new an activity</h2>

<ActivityForm volunteers={data.volunteers} />
