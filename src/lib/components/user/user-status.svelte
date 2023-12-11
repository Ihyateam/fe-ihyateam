<script lang="ts">
	import type { UserEntity } from '$lib/types';

	export let user: UserEntity;

	export let config = {
		ar: {
			true: 'مفعل',
			false: 'معطل'
		}
	};
</script>

<div class="status" class:active={user.isActive}>
	{config['ar'][user.isActive ? 'true' : 'false']}
</div>

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
