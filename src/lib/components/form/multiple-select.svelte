<script lang="ts">
	import type { HTMLFieldsetAttributes } from 'svelte/elements';

	export let arr: any[] = [];

	type $$Props = HTMLFieldsetAttributes & {
		arr: any[];
	};
</script>

<fieldset {...$$props}>
	<slot name="label">
		<legend><b>label</b>: (mulitple choose)</legend>
	</slot>
	{#each arr as entity}
		<slot {entity} />
	{/each}
</fieldset>
