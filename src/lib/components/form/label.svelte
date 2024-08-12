<script context="module" lang="ts">
	type Props = { type?: 'default'; label: string };
	type ExtendProps = { type: 'with-link'; label: string; href: string; text: string };
</script>

<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';

	type $$Props = HTMLLabelAttributes & (Props | ExtendProps) & { error?: string };
	export let error = '';
	export let props = Object.assign({ type: 'default' }, $$props) as $$Props;
</script>

<label dir="auto" class:error {...$$restProps}>
	<div>
		<span>
			{props.label}:
		</span>

		{#if props.type === 'with-link'}
			<a href={props.href} target="_self" tabindex="-1">{props.text}</a>
		{/if}

		{#if error}
			<span class="error">{error}</span>
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

	.error {
		color: red;
		font-size: smaller;
	}

	label.error :global(input:first-of-type) {
		outline: 1px solid red;
		box-shadow: 0px 0px 4px 1px hsla(0, 100%, 60%, 0.5);
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
