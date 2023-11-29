<script lang="ts">
	export let data;
</script>

<div>
	{#if data.activity?.expand}
		{@const users = data.activity.expand.volunteers}
		<pre>{JSON.stringify(users, null, 2)}</pre>
	{/if}
</div>
