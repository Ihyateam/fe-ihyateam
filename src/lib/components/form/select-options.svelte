<script lang="ts">
	export let targets: string[];
	export let arr: any[] = [];
	export let dvalue: string;
	export let name: string;
</script>

<select {name} {...$$restProps}>
	<option value={dvalue} disabled selected>{dvalue}</option>
	{#each arr as item}
		<option value={item.id}>{item[targets[0]]} - {item[targets[1]]}</option>
	{/each}
</select>

<style>
	select {
		position: relative;
		border: none;
		height: 2.5rem;
		padding-inline-start: 1rem;
		caret-color: var(--gold-color);
		outline: var(--base-outline);
	}
</style>
