<div>
	<slot name="header">
		<i>(header)</i>
	</slot>
	<slot name="body">
		<i>(body)</i>
	</slot>
</div>

<style>
	div {
		direction: rtl;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 70%;
		height: max-content;
		min-width: 20rem;
		padding-top: 1.5rem;
		margin-bottom: 1.5rem;

		& > * {
			width: 100%;
			outline: 1px solid salmon;
		}

		& > :first-child {
			display: flex;
			align-items: center;
		}

		& > :last-child {
			margin-top: 0.75rem;
		}
	}
</style>
