<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

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
		}
	};

	let visible: boolean;

	$: if ($page.form?.err) {
		console.error($page.form?.err);
	}

	$: visible = $page.form?.failed;
</script>

<section dir="rtl">
	<img class="logo" src="/ihya-logo.svg" alt="ihya logo" />
	<form name="login-form" autocomplete="on" method="POST" use:enhance>
		<Label label={data['ar'].username}>
			<Input name="username" type="username" placeholder={data['ar'].username} />
		</Label>
		<Label label={data['ar'].password}>
			<Input name="password" type="password" placeholder={data['ar'].password} />
		</Label>
		<button type="submit" title={data['ar'].login} on:click={() => (visible = false)}
			>{data['ar'].login}</button
		>
		{#if $page.form?.error}
			<p class="error" class:visible>{data['ar'].errorAdm}</p>
		{:else if $page.form?.failed}
			<p class="error" class:visible>{data['ar'].errorMsg}</p>
		{/if}
	</form>
</section>

<style>
	.error {
		opacity: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: fit-content;
		outline: 0.5px solid red;
		border-radius: 3px;
		color: var(--error-background-color);
		font-size: 14px;
		background-color: hsla(0, 100%, 80%, 0.1);
		padding: 0.2rem 0.4rem 0.2rem 0.4rem;
	}

	.visible {
		animation: shake 200ms ease-in-out;
		opacity: 1;
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
		max-width: 80%;
		max-height: 80%;
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
	}

	[type='submit'] {
		width: 40%;
		cursor: pointer;
		font-weight: 600;
		margin-left: auto;
		margin-top: 0.5rem;

		background-color: var(--button-background-color);
	}

	[type='submit']:hover {
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
