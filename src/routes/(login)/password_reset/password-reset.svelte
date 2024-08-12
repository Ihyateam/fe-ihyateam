<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { AcceptLang } from '$lib/types';

	import LoadIndicator from '$lib/components/layouts/load-indicator.svelte';
	import Label from '$lib/components/form/label.svelte';
	import Input from '$lib/components/form/input.svelte';

	export let lang: AcceptLang;

	const config = {
		ar: {
			username: 'اسم المستخدم أو البريد الإلكتروني',
			reset: 'إعادة تعيين كلمة المرور',
			cancel: 'إلغاء'
		},
		en: {
			username: 'username or email',
			reset: 'Reset Password',
			cancel: 'Cancel'
		},
		de: {
			username: 'Nutzername oder E-Mail',
			reset: 'Passwort zurücksetzen',
			cancel: 'Abbrechen'
		}
	};

	let submitting: boolean = false;
	let visible: boolean = false;
	let msg: string;

	const extendEnhance: SubmitFunction = async () => {
		submitting = true;
		visible = false;

		return async ({ result }) => {
			switch (result.type) {
				case 'redirect':
					return await goto(result.location);
				case 'error':
				case 'failure':
					visible = true;
					msg = result.data!.message;
			}
			console.log(result);
			submitting = false;
		};
	};
</script>

<section>
	<img class="logo" height="90" src="/ihya-logo.svg" alt="ihya logo" loading="lazy" />

	<form name="login-form" autocomplete="on" method="POST" use:enhance={extendEnhance}>
		<Label type="default" label={config[lang].username}>
			<Input name="username" type="username" placeholder={config[lang].username} required />
		</Label>

		<button type="submit" title={config[lang].reset} disabled={submitting}>
			{#if submitting}
				<LoadIndicator />
			{:else}
				<span>{config[lang].reset}</span>
			{/if}
		</button>

		<button
			class="cancel-btn"
			title={config[lang].cancel}
			on:click={(e) => {
				e.preventDefault();
				goto('/login');
			}}
		>
			<span>{config[lang].cancel}</span>
		</button>
		<div class="error-div">
			<p class="error" class:visible>{msg}</p>
		</div>
	</form>
</section>

<style>
	section {
		width: 25rem;
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

		min-height: 22rem;
		padding: 2rem 1rem 1rem 1rem;

		background-color: var(--secondary-background-color);

		border-radius: 1rem;
		outline: var(--base-outline);
		box-shadow: var(--full-box-shadow);
	}

	button {
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
	}

	.cancel-btn {
		background-color: hsla(0, 20%, 20%, 0.2);
	}

	.cancel-btn:hover {
		background-color: hsla(0, 20%, 15%, 0.3);
	}

	[type='submit'] {
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
