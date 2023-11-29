<script lang="ts">
	import BlurBackground from '$lib/components/layouts/blur-background.svelte';
	let lang = 'ar;';
	let isLangDialogOpen = false;
	const options: { value: LanguageOptions; name: string }[] = [
		{
			value: 'ar',
			name: 'العربية'
		},
		{
			value: 'en',
			name: 'English'
		},
		{
			value: 'tr',
			name: 'Türkçe'
		}
	];

	function closeLanguageDialog() {
		isLangDialogOpen = false;
	}

	function enhance_btn(node: HTMLButtonElement, { value }: { value: LanguageOptions }) {
		node.disabled = lang === value;

		function setLanguage() {
			lang = value;
			closeLanguageDialog();
		}

		node.addEventListener('click', setLanguage);

		return {
			destroy() {
				node.removeEventListener('click', setLanguage);
			}
		};
	}
</script>

{#if isLangDialogOpen}
	<BlurBackground>
		<menu class="dialog__container">
			{#each options as item (item.value)}
				<li><button use:enhance_btn={{ ...item }}>{item.name}</button></li>
			{/each}
		</menu>
	</BlurBackground>
{/if}

<style>
	button {
		width: 100%;
		height: 100%;
		border: none;
		cursor: pointer;
		font-weight: 400;
		font-size: large;
		color: hsla(0, 0%, 10%, 0.6);
		transition: all 100ms ease-in;
		background-color: hsl(0, 0%, 75%);
		border-radius: 4px;
	}

	button:hover {
		background-color: hsl(0, 0%, 85%);
		color: black;
		border: 2px solid hsla(0, 0%, 75%, 0.5);
	}

	li {
		width: 90%;
		height: 3rem;
		overflow: hidden;
	}

	li:first-of-type,
	li:first-of-type > button {
		border-top-right-radius: 0.8rem;
		border-top-left-radius: 0.8rem;
	}

	li:last-of-type,
	li:last-of-type > button {
		border-bottom-right-radius: 0.8rem;
		border-bottom-left-radius: 0.8rem;
	}

	.dialog__container {
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		width: 200px;
		height: 190px;
		position: fixed;
		border-radius: 1rem;
		background-color: hsl(0, 0%, 93%);

		top: calc(50vh - 100px);
		left: calc(50vw - 80px);
		gap: 10px;
		box-shadow: 0px 0px 8px 1px hsl(0, 0%, 30%);
	}

	button:disabled {
		background-color: hsl(35.7, 100%, 64.6%);
		cursor: not-allowed;
		border: none;
	}

	:disabled:hover {
		color: hsla(0, 0%, 10%, 0.6);
	}
</style>
