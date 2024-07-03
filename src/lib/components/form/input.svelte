<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

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

<style>
	input {
		border: none;
		height: 2.5rem;
		border-radius: 5px;
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
