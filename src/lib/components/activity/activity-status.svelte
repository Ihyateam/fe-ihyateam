<script lang="ts">
	import type { ActivityEntity } from '$lib/types';

	const data = {
		done: 'انتهت',
		postponed: 'مؤجلة',
		scheduled: 'لم تبدأ',
		ongoing: 'مستمرة'
	};

	export let activity: ActivityEntity;
</script>

<div>
	<span class="activity__status {activity.status}">{data[activity.status]}</span>
</div>

<style>
	div {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	.activity__status {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: right;

		width: 80%;
		height: 1.5rem;
		padding: 0.5rem 0.75rem 0.5rem 0.75rem;
		/* margin-inline-start: 4px; */

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
