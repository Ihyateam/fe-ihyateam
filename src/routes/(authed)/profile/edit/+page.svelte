<script>
	export let data;
	const { current_user } = data;
</script>

<pre>{JSON.stringify(current_user, null, 2)}</pre>
