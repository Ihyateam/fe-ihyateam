<script lang="ts">
	import { SaveIcon } from '../icons';

	export let legend: boolean = false;

	const config = {
		ar: {
			content: 'حفظ',
			title: 'عدل النشاط'
		}
	};
</script>

<button class="edit__container" form="update-profile-form" title={config[`ar`].content}>
	<span class="edit-icon">
		<SaveIcon width="1.5rem" height="1.5rem" />
	</span>
	{#if legend}
		<span class="edit">{config[`ar`].content}</span>
	{/if}
</button>

<style>
	.edit__container {
		text-decoration: none;
		color: currentColor;
		display: flex;
		align-items: center;

		padding: 0;
		height: 2rem;
		direction: ltr;

		width: fit-content;
		border-radius: 0.2rem;
		background-color: hsl(0, 0%, 92.5%);
		border: 0.2px solid hsl(0, 0%, 70%);
	}

	.edit__container:hover {
		cursor: pointer;
		background-color: hsl(0, 0%, 90%);
		box-shadow: 2px 2px 1px 1px hsla(0, 0%, 80%, 0.9);
	}

	.edit-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 2rem;
		cursor: pointer;
		border: none;
		position: relative;
	}

	.edit-icon::after {
		display: flex;
		content: ' ';
		position: absolute;
		width: 1px;
		height: 75%;
		right: -1px;
		background-color: hsla(0, 0%, 30%, 0.4);
	}

	.edit {
		inset: 0;
		margin: auto;
		font-size: 1rem;
		padding-inline: 3rem;
	}
</style>
