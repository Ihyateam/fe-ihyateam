<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { type Notification } from './notifications.js';
	import type { Readable } from 'svelte/motion';

	export let themes = {
		danger: '#E26D69',
		success: '#84C991',
		warning: '#f0ad4e',
		info: '#5bc0de',
		default: '#aaaaaa'
	};

	export let notifications: Readable<Notification[]>;
</script>

<div class="notifications">
	{#each $notifications as notification, idx (notification.id)}
		<div
			animate:flip
			class="toast"
			style="background: {themes[notification.type]};"
			in:fly={{ y: -50 }}
			out:fly={{ x: 50 }}
			style:--stack={`${idx * 10}px`}
		>
			<div class="content">{notification.message}</div>
		</div>
	{/each}
</div>

<style>
	.notifications {
		position: absolute;
		width: 25rem;
		top: 2rem;
		margin: 0;
		padding: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		/* pointer-events: none; */
	}

	.toast {
		position: absolute;
		left: 0;
		right: 0;
		bottom: auto;
		top: var(--stack);
		border-radius: 8px;
		padding: 0.5rem;
		width: 100%;
		text-align: center;
		grid-area: 1 / 1 / 2 / 2;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	@media screen and (max-width: 500px) {
		.notifications {
			width: 100%;
		}
		.toast {
			border-radius: 4px;
		}

		.notifications {
			position: fixed;
			bottom: 15dvh;
			top: auto;
		}
	}

	.content {
		padding: 10px;
		display: block;
		color: white;
		font-weight: 500;
	}
</style>
