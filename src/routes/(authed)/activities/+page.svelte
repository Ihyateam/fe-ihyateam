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
</style>
