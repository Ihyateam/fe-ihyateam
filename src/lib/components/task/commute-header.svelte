<script lang="ts">
	import PaymentStatusHeader from './payment-status-header.svelte';

	import type { CommuteEntity } from '$lib/types';
	import { CommuteIcon } from '../icons';
	import { dateFormater } from '$lib/utils';

	export let commute: CommuteEntity;
</script>

<div class="task__header">
	<CommuteIcon width="2.5rem" height="2.5rem" />
	<div class="task__info">
		<h2>{commute.id}</h2>
		<span class="demphasize">{dateFormater(new Date(commute.at_date))}</span>
	</div>
	<div class="task__status">
		<PaymentStatusHeader task={commute} />
	</div>
</div>

<style>
	.task__header::after {
		content: '';
		position: absolute;
		background-color: white;
		width: 105%;
		height: 1.5rem;
		top: -0.75rem;
		transform: translateZ(-1px);
	}

	div.task__header {
		transform-style: preserve-3d;
		position: sticky;
		top: 0.5rem;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);

		display: grid;
		grid-template-columns: 5rem repeat(auto-fit, minmax(100px, 1fr)) 7rem;
		justify-items: center;
		align-items: center;
		height: 5rem;
		border-radius: 0.5rem;
		z-index: 1;

		& > img {
			width: 3.5rem;
			height: 3.5rem;
			border-radius: 0.5rem;
		}

		& > .task__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding-inline-start: 0.5rem;
			width: 100%;
			height: 100%;
		}

		& > .task__status {
			grid-column: -2 / -1;
			width: 5rem;
		}
	}

	.demphasize {
		letter-spacing: 1px;
		color: var(--demphasized-font-color-2);
	}
</style>
