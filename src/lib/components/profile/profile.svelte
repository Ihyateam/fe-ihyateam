<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { UserEntity } from '$lib/types';

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

<form method="post" action="/logout" id="logout-form" />
<button class="avater" on:click={() => (isSettingsOpen = !isSettingsOpen)}>
	<img class="avater__img" src={user.photo} alt={user?.username || 'user-profile-img'} />
	<menu class:flex={isSettingsOpen}>
		<li><a href="/user/{user.id}" target="_self">{data[$lang].account}</a></li>
		<li use:logout>
			{data[$lang].logout}
		</li>
	</menu>
</button>

<style>
	.avater {
		position: relative;

		width: 2.5rem;
		height: 2.5rem;

		cursor: pointer;
		border-radius: 50%;
		border: none;

		&:hover {
			transition: box-shadow 0.2s ease-in-out;
			box-shadow: 0 0 0 0.25rem hsl(35, 100%, 85%);
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

		right: 10%;
		top: 110%;
		width: 12ch;
		height: max-content;
		background-color: white;

		list-style-type: none;
		border-radius: 0.25rem;
		font-size: 1.25rem;
		overflow: hidden;
		box-shadow: 2px 3px 0.25rem hsl(35, 0%, 70%);

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
		color: hsla(0, 0%, 40%, 0.9);
		padding-inline-start: 0.5rem;
		padding-inline-end: 0.5rem;

		text-align: right;

		direction: rtl;

		&:hover {
			background-color: hsl(35.7, 100%, 64.6%, 0.5);
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
			background-color: hsla(0, 0%, 80%, 0.7);
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
