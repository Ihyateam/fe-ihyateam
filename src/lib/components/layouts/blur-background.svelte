<div class="bg">
	<slot />
</div>

<style>
	.bg {
		top: 0;
		left: 0;
		z-index: 0;
		width: 100vw;
		height: 100svh;
		position: fixed;
		backdrop-filter: blur(1px);
		background-color: hsla(0, 0%, 80%, 0.6);
	}
</style>
