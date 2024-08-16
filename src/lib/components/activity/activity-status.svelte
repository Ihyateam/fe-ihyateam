<script lang="ts">
	import type { AcceptLang, ActivityEntity } from '$lib/types';
	import { getActivityStatus } from '$lib/utils/backend-utils';

	const data = {
		ar: {
			done: 'انتهت',
			scheduled: 'لم تبدأ',
			ongoing: 'مستمرة',
			'not-specified': 'قيد التعين'
		},
		en: {
			done: 'done',
			scheduled: 'scheduled',
			ongoing: 'ongoing',
			'not-specified': 'not specified'
		},
		de: {
			done: 'erledigt',
			scheduled: 'geplant',
			ongoing: 'laufend',
			'not-specified': 'nicht spezifiziert'
		}
	};

	export let activity: {} | ActivityEntity = {};
	export let lang: AcceptLang = 'ar';

	let status = getActivityStatus(activity as ActivityEntity);
</script>

<span class="activity__status {status}">{data[lang][status]}</span>

<style>
	.activity__status {
		font-weight: 900;
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: right;

		width: 100%;
		height: 1.5rem;
		padding: 0.5rem 0.75rem 0.5rem 0.75rem;

		color: var(--font-color);
		border-radius: 6px;
	}

	.not-specified {
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
