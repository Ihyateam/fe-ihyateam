<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { SubmitFunction } from '@sveltejs/kit';

	import Label from '$lib/components/form/label.svelte';
	import Input from '$lib/components/form/input.svelte';

	const data = {
		ar: {
			username: 'اسم المستخدم',
			password: 'كلمة السر',
			forgetPassword: 'نسيت كلمة السر',
			errorAdm: 'حدث خطأ رجاءاً تواصل مع المسؤول لحل المشكلة.',
			errorMsg: 'كلمة السر أو اسم المستخدم الذي أدخلته غير صحيح',
			login: 'تسجيل الدخول'
		},
		en: {
			username: 'Username',
			password: 'Password',
			forgetPassword: 'Forget Password',
			errorAdm: 'An error occurred, please contact the administrator to solve the problem.',
			errorMsg: 'The password or username you entered is incorrect',
			login: 'Login'
		}
	};

	let submitting: boolean = false;
	let backendError: boolean = false;
	let visible: boolean = false;

	const extandEnhance: SubmitFunction = async () => {
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
		};
	};
</script>

<section dir="rtl">
	<img class="logo" src="/ihya-logo.svg" alt="ihya logo" />
	<form name="login-form" autocomplete="on" method="POST" use:enhance={extandEnhance}>
		<Label label={data['ar'].username}>
			<Input name="username" type="username" placeholder={data['ar'].username} />
		</Label>
		<Label label={data['ar'].password}>
			<Input name="password" type="password" placeholder={data['ar'].password} />
		</Label>
		<button type="submit" title={data['ar'].login} disabled={submitting}>
			{data['ar'].login}
		</button>
		<p class="error" class:visible={backendError}>{data['ar'].errorAdm}</p>
		<p class="error" class:visible>{data['ar'].errorMsg}</p>
	</form>
</section>

<style>
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
		border: none;
		height: 2.5rem;
		border-radius: 5px;
		width: 40%;
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
