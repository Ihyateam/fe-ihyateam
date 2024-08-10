<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	const isPasswordVisible = writable(false);

	function passwordOnClickPreventDefault(node: HTMLDivElement) {
		function updatePasswordVisibility() {
			isPasswordVisible.update((value) => !value);
		}

		node.addEventListener('click', updatePasswordVisibility);

		return {
			destroy: () => node.removeEventListener('click', updatePasswordVisibility)
		};
	}
</script>

<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import ShowIcon from '../icons/show-icon.svelte';
	import HideIcon from '../icons/hide-icon.svelte';

	export let type;
	export let name;
	export let placeholder = '';
	export let autocomplete = '';
	export let required = false;
	let input: HTMLInputElement;

	type $$Props = HTMLInputAttributes &
		(
			| {
					name: string;
					type: Exclude<string, 'password'>;
					placeholder?: string;
					autocomplete?: string;
					required?: boolean;
			  }
			| {
					name: string;
					type: 'password';
					autocomplete?: string;
					required?: boolean;
					placeholder?: string;
			  }
		);
</script>

{#if type === 'password'}
	<input
		bind:this={input}
		{name}
		type={$isPasswordVisible ? 'text' : 'password'}
		{placeholder}
		{autocomplete}
		{required}
		{...$$restProps}
	/>

	<div id="reveal-password" tabindex="-1" use:passwordOnClickPreventDefault>
		{#if $isPasswordVisible}
			<ShowIcon width="20px" />
		{:else}
			<HideIcon width="20px" />
		{/if}
	</div>
{:else}
	<input bind:this={input} {name} {type} {placeholder} {autocomplete} {required} {...$$restProps} />
{/if}

<style>
	div#reveal-password {
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
		border-inline-start: 1px dashed gray;
		padding-inline-end: 1px;
		z-index: 1;
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
