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

<div class="outer">
	<div class="status" class:active={user.isActive}>
		{config['ar'][user.isActive ? 'true' : 'false']}
	</div>
</div>

<style>
	.status {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 75%;
		height: 1.5rem;
		padding: 0.25rem 0.5rem 0.25rem 0.5rem;
		border-radius: 5px;

		background-color: var(--red-color);
		font-weight: 500;
		color: white;

		&.active {
			background-color: var(--green-color);
		}
	}

	.outer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
