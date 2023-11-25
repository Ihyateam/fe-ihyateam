<script>
	import '../app.css';
	import LanguageDialog from './language-dialog.svelte';
</script>

<slot />

<LanguageDialog />

<style>
	div {
		& span {
			color: red;
		}
	}
</style>
