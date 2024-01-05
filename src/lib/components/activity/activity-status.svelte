<script lang="ts">
	import type { ActivityEntity } from '$lib/types';

	const data = {
		0: 'انتهت',
		1: 'مؤجلة',
		2: 'لم تبدأ',
		3: 'مستمرة'
	};

	const _class = {
		0: 'done',
		1: 'postponed',
		2: 'scheduled',
		3: 'ongoing'
	};

	export let activity: ActivityEntity;
</script>

<span class="activity__status {_class[activity.status]}">{data[activity.status]}</span>

<style>
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
