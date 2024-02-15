<script lang="ts">
	import type { CommuteEntity, TaskEntity } from '$lib/types';

	const config = {
		ar: {
			true: 'تم الدفع',
			false: 'لم يتم الدفع'
		}
	};

	export let task: TaskEntity | CommuteEntity;
</script>

<div>
	<span class="payment__status" class:paid={task.is_paid}>{config['ar'][`${task.is_paid}`]}</span>
</div>

<style>
	div {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.payment__status {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: right;

		width: 100%;
		min-width: fit-content;
		height: 1.5rem;
		padding: 0.5rem 0.25rem 0.5rem 0.25rem;

		color: var(--font-color);
		border-radius: 6px;
		background-color: var(--red-color);
	}

	.paid {
		background-color: var(--green-color);
	}
</style>
