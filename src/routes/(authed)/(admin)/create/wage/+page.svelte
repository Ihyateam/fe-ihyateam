<script lang="ts">
	import { enhance } from '$app/forms';
	import type { AcceptLang } from '$lib/types';
	import ActivitySave from '$lib/components/activity/activity-save.svelte';
	import Input from '$lib/components/form/input.svelte';
	import Label from '$lib/components/form/label.svelte';
	import Select from '$lib/components/form/select-options.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UpperBanner from '$lib/components/ui/upper-banner.svelte';

	const config = {
		ar: {
			working_hour_rate: 'سعر ساعة العمل',
			commuting_hour_rate: 'سعر ساعة التنقل',
			dvalue: 'اختر نوع العملة',
			currency: 'العملة'
		},
		en: {
			working_hour_rate: 'working hour rate',
			commuting_hour_rate: 'commuting hour rate',
			dvalue: 'choose currency type',
			currency: 'currency'
		},
		de: {
			working_hour_rate: 'Arbeitsstundenrate',
			commuting_hour_rate: 'Pendelstundenrate',
			dvalue: 'Währungstyp auswählen',
			currency: 'Währung'
		}
	};

	export let lang: AcceptLang = 'ar';
	export let data;
</script>

<PageLayout>
	<header slot="header">
		<UpperBanner>
			<h1>create wage</h1>
		</UpperBanner>
	</header>

	<form slot="body" method="POST" action="?/create" on:submit={history.back} use:enhance>
		<Label label={config[lang].working_hour_rate}>
			<Input
				name="working_hour_rate"
				placeholder={config[lang].working_hour_rate}
				type="text"
				inputmode="numeric"
				required
			/>
		</Label>

		<Label label={config[lang].commuting_hour_rate}>
			<Input
				name="commuting_hour_rate"
				placeholder={config[lang].commuting_hour_rate}
				type="text"
				inputmode="numeric"
				required
			/>
		</Label>

		<Label label={config[lang].currency}>
			<Select
				name="currency_id"
				arr={data.currencies}
				targets={['currency_name', 'symbol']}
				dvalue={config[lang].dvalue}
			/>
		</Label>

		<div class="try">
			<ActivitySave type="submit" legend={true} on:click={() => history.back()} />
		</div>
	</form>
</PageLayout>

<style>
	form {
		background-color: var(--secondary-background-color);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		outline: var(--base-outline);
		padding: 1rem;
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}

	.try {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
</style>
