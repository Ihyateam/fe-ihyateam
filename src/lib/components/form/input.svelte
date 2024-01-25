<script lang="ts">
	export let name: string = 'input';
	export let placeholder: string = '';
	export let type: string = 'text';
	export let autocomplete = '';
	export let required = false;
</script>

<input {name} {type} {placeholder} {autocomplete} {...$$props} {required} />

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
