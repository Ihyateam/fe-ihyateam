<script lang="ts">
	export let label: string;
</script>

<label>
	<span>
		{label}:
	</span>
	<slot />
</label>

<style>
	label {
		gap: 0.3rem;
		display: flex;
		flex-direction: column;
	}

	label > span {
		padding-inline-start: 5px;
		text-transform: capitalize;
	}
</style>
