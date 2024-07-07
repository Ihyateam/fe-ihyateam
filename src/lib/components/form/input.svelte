<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	let passwordVisible = writable<Boolean>(false);
</script>

<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import ShowIcon from '../icons/show-icon.svelte';
	import HideIcon from '../icons/hide-icon.svelte';

	export let name = 'input';
	export let placeholder = '';
	export let type = 'text';
	export let autocomplete = '';
	export let required = false;
	let input: HTMLInputElement;

	type $$Props = HTMLInputAttributes &
		Partial<{
			name: string;
			placeholder: string;
			type: string;
			autocomplete: string;
			required: boolean;
		}>;
</script>

<input bind:this={input} {name} {type} {placeholder} {autocomplete} {...$$restProps} {required} />

{#if type === 'password'}
	<button
		id="reveal-password"
		type="button"
		class="reveal-password"
		on:click={() => ($passwordVisible = !$passwordVisible)}
	>
		{#if $passwordVisible}
			<HideIcon width="50%" />
		{:else}
			<ShowIcon width="50%" />
		{/if}
	</button>
{/if}

<style>
	button#reveal-password {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		inset-inline-end: 0;
		inset-block-end: 0;
		height: 2.5rem;
		background-color: white;
		border: none;
		cursor: pointer;
		border-start-start-radius: 0;
		border-end-start-radius: 0;
		width: 2.5rem;
		border-inline-start: 0.25px dashed gray;
		padding-inline-end: 0.25px;
	}

	input,
	#reveal-password {
		border-radius: 5px;
	}

	input {
		position: relative;
		border: none;
		height: 2.5rem;
		padding-inline-start: 1rem;
		caret-color: var(--gold-color);
		outline: var(--base-outline);

		&:focus,
		:focus-visible,
		:focus-within {
			outline: var(--focus-input-outline);

			box-shadow: var(--input-box-shadow);
		}

		&:not(:placeholder-shown):invalid {
			color: red;
			outline-color: red;
		}

		&[type='number'] {
			appearance: textfield;
			-moz-appearance: textfield;
		}

		&[type='date'] {
			padding-inline: 0.5rem;
		}
	}
</style>
