<script>
	import ActivityForm from './activity-form.svelte';

	export let data;
</script>

<h2>Create new an activity</h2>

<ActivityForm {...data} />
