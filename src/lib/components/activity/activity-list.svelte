<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import ActivityCard from './activity-card.svelte';

	export let activities: any[];
	const data = {
		ar: {
			new_activity: 'فعالية جديدة'
		},
		en: {
			new_activity: 'new activity'
		},
		tr: {
			new_activity: 'yeni faaliyet'
		}
	};
</script>

<div
	style="display: flex; padding-bottom: 8px;border-bottom: 1px solid black;justify-content: space-between;width: 100%;"
>
	<span>{activities.length} نشاط </span>
	<button on:click={() => (activities = activities.reverse())}>filter</button>
</div>

<menu dir={$lang === 'ar' ? 'rtl' : 'ltr'}>
	{#each activities as activity (activity)}
		<li>
			<ActivityCard {activity} />
		</li>
	{/each}
	<li class="new-activity">
		<a href="/create/activity">
			{data[$lang].new_activity}
		</a>
	</li>
</menu>

<style>
	menu {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18.75rem, 19rem));
		grid-template-rows: repeat(auto-fit, 26rem);
		flex-wrap: wrap;
		width: 100%;
		min-width: 20rem;
		padding: 1.5rem;
		list-style: none;
		gap: 1.5rem;
		justify-content: center;
		justify-items: center;
	}

	li {
		height: 26rem;
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

	.new-activity {
		background-color: hsla(0, 0%, 70%, 0.1);
		border: 2px dashed hsl(0, 0%, 70%, 0.6);
		color: hsla(0, 0%, 70%, 0.6);
	}

	.new-activity > a {
		display: flex;
		height: 100%;
		text-decoration: none;
		color: inherit;
		width: 100%;
		justify-content: center;
		align-items: center;
		font-size: xx-large;
		font-weight: 700;
		cursor: copy;
	}

	.new-activity:hover {
		border-color: hsl(35, 50%, 80%);
		color: hsla(35, 50%, 70%, 0.8);
	}
</style>
