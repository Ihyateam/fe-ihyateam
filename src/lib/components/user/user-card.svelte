<script lang="ts">
	export let id: string;
</script>

<a href="/users/id/{id}">
	<slot name="avater"><img alt="" src="" /></slot>
	<slot name="name"><span>(name)</span></slot>
	<slot name="tel"><span>(tel)</span></slot>
	<slot name="activities"><span>(activities)</span></slot>
	<slot name="work-commute"><span>(work-commute)</span></slot>
	<slot name="status"><span>(status)</span></slot>
</a>

<style>
	a {
		width: 100%;
		height: 100%;
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 3rem repeat(4, 1fr) 3rem;
		align-items: center;
		justify-items: center;
		padding: 0 1rem 0 1rem;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			background-color: hsla(0, 10%, 75%, 0.1);
		}

		& > img {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 3rem;
			width: 3rem;
			border-radius: 50%;
		}

		& *:last-child {
			display: flex;
			justify-content: center;
			align-items: center;

			width: 100%;
			padding-top: 5px;
			padding-bottom: 5px;
			border-radius: 5px;

			background-color: hsl(5.1, 69.2%, 56.7%);
			font-weight: 500;
			color: white;
		}

		& > span {
			padding-inline-end: 0.5rem;
			justify-self: right;
		}
	}
</style>
