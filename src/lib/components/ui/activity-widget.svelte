<script lang="ts">
	import type { ActivityEntity } from '$lib/types';

	export let activities: ActivityEntity[] = [];

	const config = {
		ar: {
			activity: 'نشاط'
		}
	};
</script>

<div>
	<span>{activities.length}</span>
	<span>{config['ar'].activity}</span>
</div>

<style>
	div {
		border-radius: 10px;
		background-color: green;
	}
</style>
