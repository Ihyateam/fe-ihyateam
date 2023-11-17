<script lang="ts">
	export let name: string;
	export let placeholder: string;
	export let type: string;
	export let autocomplete = name;
	export let required = true;
</script>

<input {name} {type} {placeholder} {autocomplete} {...$$props} {required} />

<style>
	input {
		border: none;
		height: 2.5rem;
		border-radius: 5px;
		padding-inline-start: 1rem;
		caret-color: hsl(35.7, 100%, 50.6%);
		outline: 0.5px solid hsl(0, 0%, 85%);

		&:focus,
		:focus-visible,
		:focus-within {
			outline: 2px solid hsl(35.7, 100%, 70.6%);

			box-shadow: 0px 0px 4px 1px hsl(35.6, 100%, 50.6%);
		}
	}
</style>
