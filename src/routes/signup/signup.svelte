<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { AcceptLang } from '$lib/types';

	import LoadIndicator from '$lib/components/layouts/load-indicator.svelte';
	import Label from '$lib/components/form/label.svelte';
	import Input from '$lib/components/form/input.svelte';
	import Error from '../(authed)/+error.svelte';

	const config = {
		ar: {
			firstname: 'الاسم الأول',
			lastname: 'الاسم الأخير',
			username: 'اسم المستخدم',
			password: 'كلمة السر',
			confirmPassword: 'تأكيد كلمة السر',
			forgetPassword: 'نسيت كلمة السر',
			email: 'البريد الإلكتروني',
			login: 'تسجيل الدخول',
			cautionMsg: 'لا تزال المنصة قيد التطوير، توقع حدوث بعض الأخطاء.',
			forgot: 'نسيت كلمة السر؟',
			noAccount: 'ليس لديك حساب؟ ',
			signUp: 'انشاء حساب'
		},
		en: {
			firstname: 'First Name',
			lastname: 'Last Name',
			username: 'Username',
			password: 'Password',
			confirmPassword: 'Confirm Password',
			forgetPassword: 'Forgot Password',
			email: 'Email',
			login: 'Login',
			cautionMsg: 'The platform is still under development, expect some errors',
			forgot: 'Forgot password?',
			noAccount: "Don't have an account? ",
			signUp: 'Signup'
		},
		de: {
			firstname: 'Vorname',
			lastname: 'Nachname',
			username: 'Benutzername',
			password: 'Kennwort',
			confirmPassword: 'Kennwort bestätigen',
			forgetPassword: 'Kennwort vergaß',
			email: 'Email',
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
					throw new Error(result.error);
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

	export let lang: AcceptLang;
</script>

<!-- 
<div>
تطوّع معنا

إحياء:
فريقٌ يقدم برنامجاً ممنهجاً متكاملاً لطلاب وطالبات المر﻿حلة الثانوية المقيمين في مدينة 
إسطنبول والناطقين بالعربية، يهدف لرفع سويتهم في الجوانب الإيمانية والفكرية والثقافية والمهارية 
والاجتماعية.

للتعرف أكثر على إحياء:
<a href="https://canva.com/design/DAFd-_oUe1o/6FTvy1vMgGMNGEHf-UkNuQ/view" alt="إحياء">إحياء</a>
</div>

-->

<article>
	<img
		class="logo"
		width="300px"
		height="120px"
		src="/ihya-logo.svg"
		alt="ihya logo"
		loading="lazy"
	/>

	<section>
		<form name="signup-form" autocomplete="on" method="POST" use:enhance={extendEnhance}>
			<div class="two__inputs-flex">
				<Label type="default" label={config[lang].firstname}>
					<Input tabindex={1} name="firstname" placeholder={config[lang].firstname} required />
				</Label>

				<Label label={config[lang].lastname} type="default">
					<Input tabindex={1} name="lastname" placeholder={config[lang].lastname} required />
				</Label>
			</div>

			<Label type="default" label={config[lang].email}>
				<Input tabindex={1} name="email" placeholder={config[lang].email} required />
			</Label>

			<Label type="default" label={config[lang].username}>
				<Input tabindex={1} name="username" placeholder={config[lang].username} required />
			</Label>

			<div class="two__inputs-flex" dir={lang.includes('ar') ? 'rtl' : 'ltr'}>
				<Label label={config[lang].password} type="default">
					<Input
						tabindex={1}
						name="password"
						type="password"
						placeholder={config[lang].password}
						required
					/>
				</Label>

				<Label label={config[lang].confirmPassword} type="default">
					<Input
						tabindex={1}
						name="confrim-password"
						type="password"
						placeholder={config[lang].confirmPassword}
						required
					/>
				</Label>
			</div>

			<button type="submit" title={config[lang].login} disabled={submitting} tabindex={1}>
				{#if submitting}
					<LoadIndicator />
				{:else}
					<span>{config[lang].login}</span>
				{/if}
			</button>

			<div class="error-div">
				<p class="error" class:visible>{msg}</p>
			</div>
		</form>
	</section>
</article>

<style>
	article {
		display: grid;
		grid-template-rows: 140px 1fr;
		overflow: auto;
		height: 100%;
		justify-items: center;
		align-items: start;
	}

	img {
		width: 420px;
		height: auto;
		object-fit: cover;
		scale: 0.7;
	}

	section {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		padding: 2rem 1rem 1rem 1rem;
	}

	.two__inputs-flex {
		display: flex;
		gap: 0.8rem;
	}

	.two__inputs-flex > :global(*) {
		flex-grow: 1;
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

		background-color: var(--button-background-color);
	}

	[type='submit']:not(:disabled):hover {
		color: hsla(0, 0%, 10%, 0.8);
		background-color: var(--button-hover-background-color);
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
