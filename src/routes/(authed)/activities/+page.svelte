<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';

	import { sort_by } from '$lib/utils';
	import ActivityCard from '$lib/components/activity/activity-card.svelte';

	const config = {
		ar: {
			title: 'الأنشطة',
			activity: 'فعالية',
			new_activity: 'فعالية جديدة',
			sort_by: 'ترتيب حسب',
			filter: [
				{
					name: 'تاريخ',
					options: [
						{
							newest: 'الأحدث'
						},
						{
							oldest: 'الأقدم'
						}
					]
				},
				{
					name: 'طلاب',
					options: [
						{
							most: 'الأكثر'
						},
						{
							less: 'الأقل'
						}
					]
				}
			]
		}
	};

	let selection: 'oldest' | 'newest' | 'most' | 'less' | undefined;

	$: {
		if (selection === 'oldest') {
			data.activities = sort_by(data.activities, 'start_date', {
				op: (p: any) => new Date(p).getTime(),
				descending: false
			});
		}
		if (selection === 'newest') {
			data.activities = sort_by(data.activities, 'start_date', {
				op: (p: any) => new Date(p).getTime()
			});
		}
		if (selection === 'most') {
			data.activities = sort_by(data.activities, 'students');
		}
		if (selection === 'less') {
			data.activities = sort_by(data.activities, 'students', { descending: false });
		}
	}

	export let data;
</script>

<svelte:head>
	<title>{config['ar'].title}</title>
</svelte:head>

<PageLayout>
	<header slot="header">
		<span>{data?.activities?.length} {config['ar'].activity}</span>

		<select bind:value={selection}>
			<option value="" selected disabled hidden>ترتيب حسب</option>
			{#each config['ar']['filter'] as group}
				<optgroup label={group.name}>
					{#each group.options as option}
						{@const [key, value] = Object.entries(option)[0]}
						<option value={key}>{value}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
	</header>

	<svelte:fragment slot="body">
		{#if data.activities === undefined}
			<p>لا يوجد أي فعاليات</p>
		{:else}
			<menu>
				{#each data.activities as activity (activity)}
					<li>
						<ActivityCard {activity} />
					</li>
				{/each}
			</menu>
		{/if}
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
			direction: rtl;
		}

		& select {
			width: 10rem;
			height: 2rem;
			background-image: url('data:image/svg+xml;plaintext,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="currentColor" d="M6.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 7.414V19a1 1 0 1 1-2 0V7.414L3.707 9.707a1 1 0 0 1-1.414-1.414l4-4zM16 16.586V5a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 16.586z" /></svg >');
			background-size: 1.4rem;
			background-position: center;
			background-repeat: no-repeat;
			background-position-x: 10%;
			padding-inline-start: 1rem;
			cursor: pointer;
			font-size: 1rem;

			background-color: var(--third-background-color);
			border-radius: 8px;
			appearance: none;
			border: none;
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
