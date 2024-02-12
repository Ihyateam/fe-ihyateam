<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { SubmitFunction } from '@sveltejs/kit';

	import LoadIndicator from '$lib/components/layouts/load-indicator.svelte';
	import Label from '$lib/components/form/label.svelte';
	import Input from '$lib/components/form/input.svelte';
	import { InfoIcon } from '$lib/components/icons';

	const config = {
		ar: {
			username: 'اسم المستخدم',
			password: 'كلمة السر',
			forgetPassword: 'نسيت كلمة السر',
			errorAdm: 'حدث خطأ رجاءاً تواصل مع المسؤول لحل المشكلة.',
			errorMsg: 'كلمة السر أو اسم المستخدم الذي أدخلته غير صحيح',
			login: 'تسجيل الدخول',
			cautionMsg: 'لا تزال المنصة قيد التطوير، توقع حدوث بعض الأخطاء.'
		},
		en: {
			username: 'Username',
			password: 'Password',
			forgetPassword: 'Forget Password',
			errorAdm: 'An error occurred, please contact the administrator to solve the problem.',
			errorMsg: 'The password or username you entered is incorrect',
			login: 'Login',
			cautionMsg: 'The platform is still under development, expect some errors'
		}
	};

	let submitting: boolean = false;
	let backendError: boolean = false;
	let visible: boolean = false;

	const extandEnhance: SubmitFunction = async ({ formElement, formData }) => {
		submitting = true;
		visible = false;
		backendError = false;
		visible = false;

		return async ({ result }) => {
			if (result.type === 'redirect') {
				goto(result.location);
			}

			if (result.type === 'failure') {
				console.error(result.data);
				if (result.status === 500) {
					backendError = true;
					visible = false;
				} else {
					backendError = false;
					visible = true;
				}
			}

			submitting = false;
			password = '';
		};
	};

	let username: string;
	let password: string;
</script>

<div dir="rtl" class="caution">
	<div>
		<InfoIcon width="2rem" height="2rem" color="oklch(45% 0.3 220)" />
		<p>{config['ar'].cautionMsg}</p>
	</div>
	<div dir="ltr">
		<p><b>username</b>: test</p>
		<p><b>password</b>: admin123</p>
	</div>
</div>

<section dir="rtl">
	<img class="logo" src="/ihya-logo.svg" alt="ihya logo" />
	<form name="login-form" autocomplete="on" method="POST" use:enhance={extandEnhance}>
		<Label label={config['ar'].username}>
			<Input
				name="username"
				type="username"
				placeholder={config['ar'].username}
				bind:value={username}
				required
			/>
		</Label>
		<Label label={config['ar'].password}>
			<Input
				name="password"
				type="password"
				placeholder={config['ar'].password}
				bind:value={password}
				required
			/>
		</Label>
		<button type="submit" title={config['ar'].login} disabled={submitting}>
			<span>{config['ar'].login}</span>
			<LoadIndicator bind:isLoading={submitting} />
		</button>
		<p class="error" class:visible={backendError}>{config['ar'].errorAdm}</p>
		<p class="error" class:visible>{config['ar'].errorMsg}</p>
	</form>
</section>

<style>
	.caution > div:first-of-type {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.caution p {
		color: oklch(10% 0 0 / 80%);
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.caution {
		width: 30rem;
		max-width: 80%;
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
		padding: 0.2rem 0.4rem;
		margin-block-start: 1rem;
	}

	.visible {
		display: flex;
		animation: shake 200ms ease-in-out;
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

	section {
		overflow: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		width: 25rem;
		height: 29rem;
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
		width: 15ch;
		cursor: pointer;
		font-weight: 600;
		margin-left: auto;
		margin-top: 0.5rem;

		background-color: var(--button-background-color);
	}

	[type='submit']:not(:disabled):hover {
		color: hsla(0, 0%, 10%, 0.8);
		background-color: var(--button-hover-background-color);
	}

	form {
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.8rem;
	}

	.logo {
		width: 70%;
		min-height: 5rem;
		object-fit: cover;
	}
</style>
