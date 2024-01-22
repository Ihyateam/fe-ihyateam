<script lang="ts">
	import { EditIcon } from '../icons';

	export let legend: boolean = false;

	const langs = {
		ar: {
			content: 'تعديل',
			title: 'عدل النشاط'
		}
	};
</script>

<button class="lang__container" title={langs['ar'].title}>
	<span class="lang-icon">
		<EditIcon width="70%" height="70%" />
	</span>
	{#if legend}
		<span class="lang">{langs['ar'].content}</span>
	{/if}
</button>

<style>
	.lang__container {
		display: flex;
		overflow: hidden;
		align-items: center;

		padding: 0;
		height: 2rem;
		direction: ltr;

		border-radius: 0.2rem;
		background-color: hsl(0, 0%, 92.5%);
		border: 0.2px solid hsl(0, 0%, 70%);
	}

	.lang__container:hover {
		cursor: pointer;
		background-color: hsl(0, 0%, 90%);
		box-shadow: 2px 2px 1px 1px hsla(0, 0%, 80%, 0.9);
	}

	.lang-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 2rem;
		cursor: pointer;
		border: none;
		position: relative;
	}

	.lang-icon::after {
		display: flex;
		content: ' ';
		position: absolute;
		width: 1px;
		height: 75%;
		right: -1px;
		background-color: hsla(0, 0%, 30%, 0.4);
	}

	.lang {
		padding-left: 0.8rem;
		padding-right: 0.8rem;
	}
</style>
