<script context="module" lang="ts">
	type Props = { type: 'default'; label: string };
	type ExtendProps = { type: 'with-link'; label: string; href: string; text: string };
</script>

<script lang="ts">
	type $$Props = Props | ExtendProps;
	export const props = $$props as $$Props;
</script>

<label dir="auto">
	<div>
		<span>
			{props.label}:
		</span>
		{#if props.type === 'with-link'}
			<a href={props.href} target="_self">{props.text}</a>
		{/if}
	</div>
	<slot />
</label>

<style>
	label {
		gap: 0.3rem;
		display: flex;
		flex-direction: column;
		position: relative;
		min-width: 0;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 0.25rem;
	}

	a {
		font-size: smaller;
	}
</style>
