<script lang="ts">
	const lang = [
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

	function enhance_btn(node: HTMLElement, { value }: { value: string }) {
		function setLanguage() {
			alert(value);
		}
		node.addEventListener('click', setLanguage);

		return {
			destroy() {
				node.removeEventListener('click', setLanguage);
			}
		};
	}
</script>

<menu class="dialog__container">
	{#each lang as item (item.value)}
		<li><button use:enhance_btn={{ ...item }}>{item.name}</button></li>
	{/each}
</menu>

<div class="bg" />

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
		background-color: hsl(0, 0%, 90%);
	}

	button:hover {
		background-color: white;
		color: black;
	}

	li {
		width: 90%;
		height: 3rem;
		overflow: hidden;
	}

	li:first-of-type {
		border-top-right-radius: 0.8rem;
		border-top-left-radius: 0.8rem;
	}

	li:last-of-type {
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
		z-index: 1;
		list-style: none;
		width: 200px;
		height: 190px;
		position: fixed;
		border-radius: 1rem;
		background-color: hsl(0, 0%, 65%);
		top: calc(50vh - 100px);
		left: calc(50vw - 80px);
		gap: 10px;
		box-shadow: 0px 0px 8px 1px hsl(0, 0%, 30%);
	}

	.bg {
		top: 0;
		left: 0;
		z-index: 0;
		width: 100vw;
		height: 100vh;
		position: fixed;
		background-color: hsla(0, 0%, 20%, 0.6);
	}
</style>
