<div class="profile__header">
	<slot />
</div>

<style>
	.profile__header::after {
		content: '';
		position: absolute;
		background-color: white;
		width: 105%;
		height: 1.5rem;
		top: -0.75rem;
		transform: translateZ(-1px);
	}

	div.profile__header {
		transform-style: preserve-3d;
		position: sticky;
		top: 0.5rem;
		z-index: 1;

		background-color: var(--secondary-background-color);

		display: flex;
		justify-content: center;
		align-items: center;
		height: 5rem;
		border-radius: 0.5rem;
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);
	}
</style>
