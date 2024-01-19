<script lang="ts">
	export let isLoading: boolean = false;
</script>

<div class="loadership_VKSFC" class:show={isLoading}>
	<div />
	<div />
	<div />
	<div />
</div>

<style>
	div.show {
		display: flex;
	}

	.loadership_VKSFC {
		display: none;
		position: relative;
		width: 22px;
		height: 1em;
		margin-inline-start: 0.25rem;
	}

	.loadership_VKSFC div {
		position: absolute;
		top: 80%;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: currentColor;
		animation: loadership_VKSFC_bounce 2.17s infinite;
		animation-timing-function: linear;
	}

	.loadership_VKSFC div:nth-child(1) {
		animation-delay: 0s;
		left: 0px;
	}

	.loadership_VKSFC div:nth-child(2) {
		animation-delay: 0.41s;
		left: 6px;
	}

	.loadership_VKSFC div:nth-child(3) {
		animation-delay: 0.82s;
		left: 12px;
	}

	.loadership_VKSFC div:nth-child(4) {
		animation-delay: 1.23s;
		left: 18px;
	}

	@keyframes loadership_VKSFC_bounce {
		0%,
		15.11520737327189%,
		37.78801843317973%,
		60.46082949308756%,
		75.57603686635946%,
		100% {
			transform: translateY(0);
		}

		30.23041474654378% {
			transform: translateY(-17px);
		}

		45.34562211981567% {
			transform: translateY(-6.800000000000001px);
		}
	}
</style>
