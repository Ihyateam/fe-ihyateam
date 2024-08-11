<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { AcceptLang } from '$lib/types';

	import LoadIndicator from '$lib/components/layouts/load-indicator.svelte';
	import Label from '$lib/components/form/label.svelte';
	import Input from '$lib/components/form/input.svelte';
	import { dev } from '$app/environment';
	import { InfoIcon } from '$lib/components/icons';

	export let lang: AcceptLang;

	const config = {
		ar: {
			username: 'اسم المستخدم',
			password: 'كلمة السر',
			forgetPassword: 'نسيت كلمة السر',
			login: 'تسجيل الدخول',
			cautionMsg: 'لا تزال المنصة قيد التطوير، توقع حدوث بعض الأخطاء.',
			forgot: 'نسيت كلمة السر؟',
			noAccount: 'ليس لديك حساب؟ ',
			signUp: 'انشاء حساب'
		},
		en: {
			username: 'username',
			password: 'password',
			forgetPassword: 'Forgot Password',
			login: 'Login',
			cautionMsg: 'The platform is still under development, expect some errors',
			forgot: 'Forgot password?',
			noAccount: "Don't have an account? ",
			signUp: 'Signup'
		},
		de: {
			username: 'Nutzername',
			password: 'Kennwort',
			forgetPassword: 'Kennwort vergaß',
			login: 'anmelden',
			cautionMsg:
				'Die Plattform befindet sich noch in der Entwicklung, rechnen Sie mit einigen Fehlern.',
			forgot: 'Kennwort vergessen?',
			noAccount: 'Sie haben noch kein Konto? ',
			signUp: 'Registrierung'
		}
	};

	let submitting: boolean = false;
	let visible: boolean = false;
	let msg: string;

	const extendEnhance: SubmitFunction = async () => {
		submitting = true;
		visible = false;

		return async ({ result, formElement }) => {
			switch (result.type) {
				case 'redirect':
					return await goto(result.location);
				case 'error':
				case 'failure':
					visible = true;
					msg = result.data?.message;
			}
			submitting = false;
			const input = formElement.querySelector('input[type="password"]') as HTMLInputElement;
			if (input) {
				input!.value = '';
				input.focus();
			}
		};
	};
</script>

{#if dev}
	<div class="caution">
		<div>
			<InfoIcon width="2rem" height="2rem" color="oklch(45% 0.3 220)" />
			<p>{config[lang].cautionMsg}</p>
		</div>
		<div dir="ltr">
			<p><b>username</b>: admin123</p>
			<p><b>password</b>: admin123</p>
		</div>
	</div>
{/if}

<section>
	<img class="logo" height="90" src="/ihya-logo.svg" alt="ihya logo" loading="lazy" />

	<form name="login-form" autocomplete="on" method="POST" use:enhance={extendEnhance}>
		<Label type="default" label={config[lang].username}>
			<Input name="username" type="username" placeholder={config[lang].username} required />
		</Label>

		<Label
			label={config[lang].password}
			type="with-link"
			href="/password_reset"
			text={config[lang].forgetPassword}
		>
			<Input name="password" type="password" placeholder={config[lang].password} required />
		</Label>
		<button type="submit" title={config[lang].login} disabled={submitting}>
			{#if submitting}
				<LoadIndicator />
			{:else}
				<span>{config[lang].login}</span>
			{/if}
		</button>
		<div class="error-div">
			<p class="error" class:visible>{msg}</p>
		</div>
		<div class="footer">
			<hr />
			<span class="align-center">
				{config[lang].noAccount}
				<a href="/signup" target="_self">
					{config[lang].signUp}
				</a>
			</span>
		</div>
	</form>
</section>

<style>
	.footer {
		margin-top: auto;
		padding-bottom: 2.5rem;
		display: flex;
		flex-direction: column;
	}

	hr {
		border: none;
		border-top: 3px double #333;
		color: #333;
		overflow: visible;
		text-align: center;
		height: 5px;
	}

	hr::after {
		background: var(--secondary-background-color);
		content: '§';
		font-family: monospace;
		padding-inline: 4px;
		position: relative;
		top: -12px;
	}

	.footer > span {
		margin-top: 8px;
		align-self: center;
	}

	.caution > :first-of-type {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.caution p {
		color: oklch(10% 0 0 / 80%);
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.caution,
	section {
		width: 25rem;
	}

	.caution {
		outline: 2px solid oklch(95% 0.3 250);
		border-radius: 3px;
		font-size: 14px;
		background-color: oklch(90% 0.2 250 / 40%);
		padding: 0.5rem 0.75rem;
		z-index: 1;
		position: absolute;
		left: 50%;
		top: 5svh;
		transform: translateX(-50%);
	}

	button:disabled {
		color: #969090e5;
		background-color: hsla(35.8, 100%, 64.5%, 0.6);
		pointer-events: not-allowed;
		cursor: wait;
	}

	.error {
		display: none;
		justify-content: center;
		align-items: center;
		height: fit-content;
		outline: 0.5px solid red;
		border-radius: 3px;
		color: var(--error-background-color);
		font-size: 14px;
		background-color: hsla(0, 100%, 80%, 0.1);
		padding: 0.25rem 0;
		text-align: center;
	}

	.visible {
		display: flex;
		animation: shake 200ms ease-in-out;
	}

	section {
		overflow: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		min-height: 30rem;
		padding: 2rem 1rem 1rem 1rem;

		background-color: var(--secondary-background-color);

		border-radius: 1rem;
		outline: var(--base-outline);
		box-shadow: var(--full-box-shadow);
	}

	[type='submit'] {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		height: 2.5rem;
		border-radius: 5px;
		width: 100%;
		cursor: pointer;
		font-weight: 600;

		letter-spacing: 1.5px;
		text-transform: uppercase;

		background-color: var(--button-background-color);
	}

	[type='submit']:not(:disabled):hover {
		color: hsla(0, 0%, 10%, 0.8);
		background-color: var(--button-hover-background-color);
	}

	form {
		flex-grow: 1;
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.8rem;
	}

	form > * {
		min-width: 0;
	}

	.error-div {
		height: 4ch;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.error {
		flex-grow: 1;
	}

	.logo {
		object-fit: cover;
	}

	@media screen and (max-width: 500px) {
		section {
			border-radius: 0;
			box-shadow: none;
			width: 100%;
			height: 100%;
		}

		.caution {
			display: none;
		}

		.error {
			font-size: small;
		}
	}

	@keyframes shake {
		0% {
			transform: translateX(0px);
		}

		15% {
			transform: translateX(-3px);
		}

		30% {
			transform: translateX(3px);
		}

		45% {
			transform: translateX(-3px);
		}

		60% {
			transform: translateX(3px);
		}

		75% {
			transform: translateX(-3px);
		}

		100% {
			transform: translateX(0px);
		}
	}
</style>
