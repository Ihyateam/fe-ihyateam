<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { dateFormater } from '$lib/utils';

	export let activity: ActivityEntity;
</script>

<div class="container">
</div>

<style>
	.container {
		container-name: balance;
		container-type: inline-size;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);
		padding: 1rem;
		height: 300px;
		border-radius: 4px;
		overflow: auto;
	}

</style>
