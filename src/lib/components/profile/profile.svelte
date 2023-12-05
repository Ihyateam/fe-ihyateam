<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import BlurBackground from '../layouts/blur-background.svelte';

	export let user: UserEntity;
	let isSettingsOpen = false;

	const data = {
		ar: {
			account: 'الحساب',
			logout: 'تسجيل الخروج'
		},
		en: {
			account: 'Account',
			logout: 'Logout'
		},
		tr: {
			account: 'Hesap',
			logout: 'Çıkış Yap'
		}
	};

	function logout(node: HTMLElement) {
		function invokeLogoutForm() {
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
</script>

<BlurBackground
	isOpen={isSettingsOpen}
	on:backgroundClick={(e) => {
		isSettingsOpen = e.detail.isOpen;
	}}
/>
<form method="post" action="/logout" id="logout-form" />
<button class="avater" on:click={() => (isSettingsOpen = !isSettingsOpen)}>
	<img
		class="avater__img profile"
		src={getURL(user, { thumb: '100x100' })}
		alt={user?.username || 'user-profile-img'}
	/>
	<menu class:flex={isSettingsOpen}>
		<li><a href="/users/id/{user.id}" target="_self">{data['ar'].account}</a></li>
		<li><a href="/users/id/{user.id}/tasks" target="_self">مهامي</a></li>
		<li use:logout>
			{data['ar'].logout}
		</li>
	</menu>
</button>

<style>
	.avater {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		width: 2.5rem;
		height: 2.5rem;

		cursor: pointer;
		border-radius: 50%;
		border: none;

		&:hover {
			transition: box-shadow 0.2s ease-in-out;
			box-shadow: 0 0 0 0.25rem var(--button-hover-background-color-2);
		}
	}

	img {
		border-radius: 50%;
		height: 100%;
		width: 100%;
		color: transparent;
	}

	menu {
		position: absolute;
		display: none;

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

		&.flex {
			display: flex;
			flex-direction: column;
		}
	}

	li {
		display: flex;

		width: 100%;
		position: relative;
		padding: 0.25rem;
		padding-inline-start: 0.5rem;
		padding-inline-end: 0.5rem;

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
			text-decoration: none;
			color: inherit;
		}
	}

	form {
		display: none;
	}
</style>
