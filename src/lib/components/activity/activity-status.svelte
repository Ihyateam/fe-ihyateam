<script lang="ts">
	import type { ActivityStatus } from '$lib/types';

	const data = {
		done: 'انتهت',
		postponed: 'مؤجلة',
		scheduled: 'لم تبدأ',
		ongoing: 'مستمرة'
	};

	export let activityStatus: ActivityStatus;
</script>

<span class="activity__status {activityStatus}">{data[activityStatus]}</span>

<style>
	.activity__status {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: right;

		width: max-content;
		padding: 0.1rem 0.6rem 0.1rem 0.6rem;
		margin-inline-start: 4px;

		color: var(--font-color);
		border-radius: 6px;
	}

	.postponed {
		background-color: var(--blue-color);
	}

	.ongoing {
		background-color: var(--green-color);
	}

	.scheduled {
		background-color: var(--gold-color);
	}

	.done {
		background-color: var(--red-color);
	}
</style>
