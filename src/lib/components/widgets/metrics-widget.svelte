<script lang="ts">
	import type { Metrics } from '$lib/types';

	import { ActivityIcon, VolunteersIcon, ClockIcon, MoneyIcon } from '$lib/components/icons';
	import { moneyFormater } from '$lib/utils/formaters';
	import ResponsiveContainer from '$lib/components/ui/responsive-container.svelte';

	export let props: Metrics;

	let config = {
		ar: {
			volutneers: 'متطوع',
			activities: 'فعالية',
			hours: 'ساعة عمل',
			balance: 'الموازنة'
		}
	};

	let iconProps = { width: '2rem', height: '2rem' };
</script>

<ResponsiveContainer style="grid-column: 1 / -1;" --container-name="balance">
	<ul class="flex">
		<li>
			<span class="value">
				{props.users}
				<VolunteersIcon {...iconProps} />
			</span>
			<span class="label">{config['ar'].volutneers}</span>
		</li>
		<li>
			<span class="value">
				{props.activities}
				<ActivityIcon {...iconProps} />
			</span>
			<span class="label">
				{config['ar'].activities}
			</span>
		</li>
		<li>
			<span class="value">
				{props.hours}
				<ClockIcon {...iconProps} />
			</span>
			<span class="label">{config['ar'].hours}</span>
		</li>
		<li>
			<span class="value">
				{moneyFormater(props.balance)}
				<MoneyIcon {...iconProps} />
			</span>
			<span class="label">{config['ar'].balance}</span>
		</li>
	</ul>
</ResponsiveContainer>

<style>
	.label {
		color: black;
		font-weight: 700;
	}

	.value {
		display: flex;
		font-size: clamp(1.25rem, 1.5vi, 1.75rem);
		justify-content: space-between;
		align-items: center;
	}

	.flex {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
		grid-auto-rows: minmax(7rem, 1fr);
		gap: 1rem;
	}

	li {
		position: relative;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0.5rem 1rem;
		outline: var(--base-outline);
		overflow: hidden;
		&::after {
			content: ' ';
			background-color: hsla(0, 10%, 80%, 0.4);
			filter: blur(20px);
			position: absolute;
			left: 0%;
			top: 0%;
			padding: 100%;
			backdrop-filter: blur(20px);
			z-index: -1;
		}

		& > * {
			min-width: 0;
		}
	}

	@container balance (width < 700px) {
		.flex {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
		}
		li {
			& svg {
				display: none;
			}
		}
	}
</style>
