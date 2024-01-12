<script lang="ts">
	export let is_paid: boolean;
</script>

<div>
	<span class="payment__status" class:paid={is_paid}>{is_paid ? 'نعم' : 'لا'}</span>
</div>

<style>
	div {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.payment__status {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: right;

		width: 70%;
		min-width: 2rem;
		height: 1.5rem;
		padding: 0.5rem 0.25rem 0.5rem 0.25rem;

		color: var(--font-color);
		border-radius: 6px;
		background-color: var(--red-color);
	}

	.paid {
		background-color: var(--green-color);
	}
</style>
