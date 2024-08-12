<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { type SubmitFunction } from '@sveltejs/kit';
	import type { AcceptLang } from '$lib/types';

	import LoadIndicator from '$lib/components/layouts/load-indicator.svelte';
	import Label from '$lib/components/form/label.svelte';
	import Input from '$lib/components/form/input.svelte';
	import Error from '../(authed)/+error.svelte';
	import Header from './header.svelte';

	const config = {
		ar: {
			firstname: 'الاسم الأول',
			lastname: 'الاسم الأخير',
			username: 'اسم المستخدم',
			password: 'كلمة السر',
			confirmPassword: 'تأكيد كلمة السر',
			forgetPassword: 'نسيت كلمة السر',
			email: 'البريد الإلكتروني',
			confirmEmail: 'تأكيد البريد الإلكتروني',
			login: 'تسجيل الدخول',
			cautionMsg: 'لا تزال المنصة قيد التطوير، توقع حدوث بعض الأخطاء.',
			forgot: 'نسيت كلمة السر؟',
			noAccount: 'ليس لديك حساب؟ ',
			telephone: 'رقم الهاتف',
			goneWrong: 'لم يتم تقديم الطلب بشكل صحيح، يرجى تصحيحه والمحاولة مرة أخرى!',
			emailsDontMatch: 'البريدين الإلكترونيين غير متطابقين',
			passwordsDontMatch: 'كلمات السر غير متطابقة',
			signUp: 'طلب انضمام'
		},

		en: {
			firstname: 'First Name',
			lastname: 'Last Name',
			username: 'Username',
			password: 'Password',
			confirmPassword: 'Confirm Password',
			forgetPassword: 'Forgot Password',
			email: 'Email',
			confirmEmail: 'Confirm Email',
			login: 'Login',
			cautionMsg: 'The platform is still under development, expect some errors',
			forgot: 'Forgot password?',
			noAccount: "Don't have an account? ",
			emailsDontMatch: 'Emails do not match',
			passwordsDontMatch: 'Passwords do not match',
			goneWrong: "Form hasn't been submitted correctly please correct and try again!",
			telephone: 'Telephone',
			signUp: 'enroll'
		},

		de: {
			firstname: 'Vorname',
			lastname: 'Nachname',
			username: 'Benutzername',
			password: 'Kennwort',
			confirmPassword: 'Kennwort bestätigen',
			forgetPassword: 'Kennwort vergaß',
			email: 'Email',
			confirmEmail: 'Email bestätigen',
			login: 'anmelden',
			cautionMsg:
				'Die Plattform befindet sich noch in der Entwicklung, rechnen Sie mit einigen Fehlern.',
			forgot: 'Kennwort vergessen?',
			emailsDontMatch: 'Emails stimmen nicht übere',
			passwordsDontMatch: 'Passwörter stimmen nicht überein',
			goneWrong:
				'Das Formular wurde nicht korrekt übermittelt. Bitte korrigieren und erneut versuchen!',
			noAccount: 'Sie haben noch kein Konto? ',
			telephone: 'Telefon',
			signUp: 'Anmelden'
		}
	};

	let submitting: boolean = false;
	let visible: boolean = false;
	let msg: string;
	let obj_err: {
		[key: string]: string;
	} = {};

	const extendEnhance: SubmitFunction = async ({ formData, controller }) => {
		obj_err = {};
		submitting = true;
		visible = false;

		const obj = Object.fromEntries(formData);

		if (obj['confirm-email'] !== obj.email) {
			obj_err.email = config[lang].emailsDontMatch;
		}

		if (obj['confirm-password'] !== obj.password) {
			obj_err.password = config[lang].passwordsDontMatch;
		}

		if (Object.values(obj_err).length !== 0) {
			controller.abort();
			setTimeout(() => {
				submitting = false;
			}, 0);
			msg = config[lang].goneWrong;
			visible = true;
		}

		return async ({ result, update }) => {
			switch (result.type) {
				case 'redirect':
					return await goto(result.location);
				case 'error':
					throw new Error(result.error);
				case 'failure':
					msg = result.data?.message;
					visible = true;
			}
			submitting = false;
			update({ reset: true });
		};
	};

	export let lang: AcceptLang;
</script>

<article>
	<img
		class="logo"
		width="300px"
		height="120px"
		src="/ihya-logo.svg"
		alt="ihya logo"
		loading="lazy"
	/>

	<section dir={lang.includes('ar') ? 'rtl' : 'ltr'}>
		<Header {lang} />
		<form name="signup-form" autocomplete="on" method="POST" use:enhance={extendEnhance}>
			<div class="two__inputs-flex">
				<Label type="default" label={config[lang].firstname}>
					<Input
						type="text"
						tabindex={1}
						name="firstname"
						placeholder={config[lang].firstname}
						required
					/>
				</Label>

				<Label label={config[lang].lastname} type="default">
					<Input
						type="text"
						tabindex={1}
						name="lastname"
						placeholder={config[lang].lastname}
						required
					/>
				</Label>
			</div>

			<div class="email__div">
				<Label type="default" label={config[lang].email} error={obj_err?.email}>
					<Input type="email" tabindex={1} name="email" placeholder={config[lang].email} required />
				</Label>

				<Label type="default" label={config[lang].confirmEmail} error={obj_err?.email}>
					<Input
						type="email"
						id="confirm-email"
						tabindex={1}
						name="confirm-email"
						placeholder={config[lang].confirmEmail}
						required
					/>
				</Label>
			</div>

			<Label type="default" label={config[lang].username}>
				<Input
					tabindex={1}
					type="text"
					name="username"
					placeholder={config[lang].username}
					required
				/>
			</Label>

			<div class="two__inputs-flex">
				<Label label={config[lang].password} type="default" error={obj_err?.password}>
					<Input
						tabindex={1}
						name="password"
						type="password"
						placeholder={config[lang].password}
						required
					/>
				</Label>

				<Label label={config[lang].confirmPassword} type="default" error={obj_err?.password}>
					<Input
						tabindex={1}
						name="confirm-password"
						type="password"
						placeholder={config[lang].confirmPassword}
						required
					/>
				</Label>
			</div>

			<div class="phone_upr__div">
				<Label for="phone-prefix" label={config[lang].telephone} type="default" />
				<div class="phone__div" dir="ltr">
					<Input
						id="phone-prefix"
						type="numeric"
						tabindex={1}
						name="prefix"
						required
						placeholder="+90"
					/>

					<Input tabindex={1} name="phone-number" type="text" placeholder="555-555-5555" required />
				</div>
			</div>

			<button type="submit" title={config[lang].login} disabled={submitting} tabindex={1}>
				{#if submitting}
					<LoadIndicator />
				{:else}
					<span>{config[lang].signUp}</span>
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

		overscroll-behavior: contain;
	}

	img {
		width: 420px;
		height: auto;
		object-fit: cover;
		scale: 0.7;
	}

	.phone_upr__div {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	section {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		padding: 1rem 1rem 1rem 1rem;
		height: 100%;
	}

	.two__inputs-flex {
		display: flex;
		gap: 0.8rem;
	}

	.two__inputs-flex > :global(*) {
		flex-grow: 1;
	}

	.email__div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.phone__div {
		display: grid;
		grid-template-columns: 60px 1fr;

		align-items: end;
		gap: 0 0.5rem;
	}

	section > :global(*) {
		width: 75%;
	}

	form {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1rem;
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

		text-transform: uppercase;
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
