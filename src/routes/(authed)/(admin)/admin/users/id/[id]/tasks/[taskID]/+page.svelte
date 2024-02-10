<script lang="ts">
	import { page } from '$app/stores';

	export let data;
</script>

<pre>{JSON.stringify({task: data.task }, null, 2)}</pre>
