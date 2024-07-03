<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import ActivityCard from '$lib/components/activity/activity-card.svelte';

	const config = {
		ar: {
			title: 'الأنشطة',
			activity: 'فعالية',
			new_activity: 'فعالية جديدة',
			sort_by: 'ترتيب حسب'
		}
	};

	export let data;
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>{data?.activities?.length} {config['ar'].activity}</span>
	</header>

	<svelte:fragment slot="body">
		<menu>
			{#each data.activities as activity (activity)}
				<li>
					<ActivityCard {activity} />
				</li>
			{/each}
			{#if data.user.isAdmin}
				<li class="new-activity">
					<a href="/create/activity">
						{config['ar'].new_activity}
					</a>
				</li>
			{/if}
		</menu>
	</svelte:fragment>
</PageLayout>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		& span {
			font-size: 1rem;
			color: var(--demphasized-font-color);
			letter-spacing: 1px;
		}
	}

	menu {
		display: grid;
		grid-template-columns: repeat(auto-fit, 17.75rem);
		grid-template-rows: repeat(auto-fit, 26rem);
		width: 100%;
		padding: 1.5rem;
		padding-block-start: 0;
		list-style: none;
		gap: 1.5rem;
		justify-content: center;
		justify-items: center;
	}

	li {
		height: 26rem;
		width: 100%;
		border: var(--base-outline);
		border-radius: 0.5rem;
		background-clip: padding-box;
		overflow: hidden;
	}

	li:is(:hover, :focus, :focus-visible) {
		background-color: hsla(35, 100%, 80%, 0.258);
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
