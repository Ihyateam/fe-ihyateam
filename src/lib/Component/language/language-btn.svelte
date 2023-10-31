<script lang="ts">
	import type { LanguageOptions } from '$lib/types';
	import { EarthIcon } from '../icons';
	import LanguageDialog from './language-dialog.svelte';

	export let legend = true;

	const langs = {
		ar: 'العربية',
		en: 'English',
		tr: 'Türkçe'
	};

	let lang: LanguageOptions = 'ar';
</script>

<button class="lang__container" data-tooltip="change langauge">
	<span class="lang-icon"> <EarthIcon /> </span>
	{#if legend}
		<span class="lang">{langs[lang]}</span>
	{/if}
</button>

<style>
	.lang__container {
		display: flex;
		overflow: hidden;
		align-items: center;

		padding: 0;
		height: 2rem;
		direction: ltr;

		border-radius: 0.2rem;
		background-color: hsl(0, 0%, 92.5%);
		border: 0.2px solid hsl(0, 0%, 70%);
	}

	.lang__container:hover {
		cursor: pointer;
		background-color: hsl(0, 0%, 85%);
		box-shadow: 2px 2px 1px 1px hsla(0, 0%, 80%, 0.9);
	}

	.lang-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 2rem;
		cursor: pointer;
		border: none;
		position: relative;
	}

	.lang-icon::after {
		display: flex;
		content: ' ';
		position: absolute;
		width: 1px;
		height: 75%;
		right: -1px;
		background-color: hsla(0, 0%, 30%, 0.4);
	}

	.lang {
		padding-left: 0.8rem;
		padding-right: 0.8rem;
	}
</style>
