<script lang="ts">
	import ActivityCard from './activity-card.svelte';

	export let activities: any[];
</script>

{#if activities.length}
	<menu>
		{#each activities as activity (activity)}
			<li>
				<ActivityCard {activity} />
			</li>
		{/each}
	</menu>
{/if}

<style>
	menu {
		grid-template-columns: repeat(auto-fit, 20rem);
		grid-template-rows: repeat(auto-fit, 15rem);
		display: flex;
		flex-wrap: wrap;
		padding: 1.5rem;
		list-style: none;
		gap: 1.5rem;
	}

	li {
		height: 18.375rem;
		width: 18.75rem;
		background-color: #fff;
		border: 0.0625rem solid #dadce0;
		border-radius: 0.5rem;
		background-clip: padding-box;
		overflow: hidden;
	}

	li:is(:hover, :focus, :focus-visible) {
		background-color: hsla(35, 100%, 80%, 0.1);
	}
</style>
