<script lang="ts">
	export let isActive: Boolean;

	export let config = {
		ar: {
			true: 'مفعل',
			false: 'معطل'
		}
	};
</script>

<div class="status" class:active={isActive}>{config['ar'][isActive]}</div>

<style>
	.status {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		padding-top: 5px;
		padding-bottom: 5px;
		border-radius: 5px;

		background-color: var(--red-color);
		font-weight: 500;
		color: white;

		&.active {
			background-color: var(--green-color);
		}
	}
</style>
