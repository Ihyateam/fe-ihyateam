<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { EditIcon } from '../icons';
	import ActivityEdit from './activity-edit.svelte';

	export let activity: ActivityEntity;
</script>

<div class="container">
	{activity.title}
	<div class="edit-icon">
		<ActivityEdit legend={true} />
	</div>
</div>

<style>
	.container {
		position: relative;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);
		padding: 1rem;
		height: 300px;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	div.edit-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		inset-block-start: 0.5rem;
		inset-inline-end: 0.5rem;
		cursor: pointer;
	}
</style>
