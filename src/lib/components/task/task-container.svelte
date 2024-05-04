<script lang="ts">
	import type { CommuteEntity, TaskEntity } from '$lib/types';

	export let item: TaskEntity | CommuteEntity;
</script>

<div class="info">
	<div dir="ltr">
		<pre>{JSON.stringify(item, null, 2)}</pre>
	</div>
</div>
