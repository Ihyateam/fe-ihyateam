<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import BlurBackground from '$lib/components/layouts/blur-background.svelte';

	export let user: UserEntity;
	let isSettingsOpen = false;

	const data = {
		ar: {
			account: 'الحساب',
			tasks: 'مهامي',
			logout: 'تسجيل الخروج'
		}
	};

	function logout(node: HTMLElement) {
		function invokeLogoutForm(e: MouseEvent) {
			e.preventDefault();
			const form = document.getElementById('logout-form') as HTMLFormElement;
			if (form) form.submit();
		}
		node.addEventListener('click', invokeLogoutForm);

		return {
			destroy() {
				node.removeEventListener('click', invokeLogoutForm);
			}
		};
	}

	function handleSettingsMenu() {
		isSettingsOpen = !isSettingsOpen;
	}
</script>

<form method="post" action="/logout" id="logout-form" />
<button class="avater" class:menuOpen={isSettingsOpen} on:click={handleSettingsMenu}>
	<img
		class="avater__img profile"
		src={getURL(user, { thumb: '100x100' })}
		alt={user?.username || 'user-profile-img'}
	/>

	{#if isSettingsOpen}
		<BlurBackground on:click={handleSettingsMenu} />
		<menu class="flex">
			<li><a href="/profile" target="_self">{data['ar'].account}</a></li>
			<li><a href="/tasks" target="_self">{data['ar'].tasks}</a></li>
			<li>
				<a href="/login" target="_self" use:logout>
					{data['ar'].logout}
				</a>
			</li>
		</menu>
	{/if}
</button>

<style>
	.avater {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		width: 2.75rem;
		height: 2.75rem;

		cursor: pointer;
		border-radius: 50%;
		border: none;
		transition: box-shadow 0.2s ease-in-out;

		&:hover,
		&.menuOpen {
			box-shadow: 0 0 0 0.25rem var(--button-hover-background-color-2);
		}
	}

	img {
		border-radius: 50%;
		height: 100%;
		width: 100%;
		color: transparent;
		z-index: 2;
	}

	menu {
		position: absolute;
		display: flex;
		flex-direction: column;

		z-index: 2;
		right: 120%;
		top: 60%;
		width: 12ch;
		height: max-content;
		background-color: white;

		list-style-type: none;
		border-radius: 0.25rem;
		font-size: 1.25rem;
		overflow: hidden;
		box-shadow: var(--base-box-shadow);

		outline: var(--base-outline);
	}

	li {
		display: flex;

		width: 100%;
		position: relative;

		text-align: right;

		direction: rtl;

		&:hover {
			background-color: var(--hover-background-color);
			color: black;
			/* color: ; */
		}

		&:not(:last-of-type)::after {
			position: absolute;
			left: 12.5%;
			bottom: 0;
			content: ' ';
			width: 75%;
			height: 1px;
			background-color: var(--third-background-color);
		}

		& a {
			height: 100%;
			width: 100%;
			text-decoration: none;
			color: inherit;
		}

		& > * {
			padding: 0.25rem;
			padding-inline-start: 0.5rem;
			padding-inline-end: 0.5rem;
		}
	}

	form {
		display: none;
	}
</style>
