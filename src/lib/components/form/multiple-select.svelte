<script lang="ts">
	export let arr: any[] = [];
	export let fieldset_name: string;
</script>

<fieldset name={fieldset_name}>
	<slot name="label">
		<legend><b>label</b>: (mulitple choose)</legend>
	</slot>
	{#each arr as entity}
		<slot {entity} />
	{/each}
</fieldset>
