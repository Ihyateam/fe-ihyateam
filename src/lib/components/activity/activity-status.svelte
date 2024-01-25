<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { getActivityStatus } from '$lib/utils/backend-utils';

	const data = {
		done: 'انتهت',
		scheduled: 'لم تبدأ',
		ongoing: 'مستمرة'
	};

	export let activity: ActivityEntity;

	let status = getActivityStatus(activity);
</script>

<span class="activity__status {status}">{data[status]}</span>

<style>
	.activity__status {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: right;

		/* width: 80%; */
		/* min-width: 2rem; */
		width: 100%;
		height: 1.5rem;
		padding: 0.5rem 0.75rem 0.5rem 0.75rem;

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
