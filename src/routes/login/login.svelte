<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { lang } from '$lib/stores/lang';

	import LanguageBtn from '$lib/components/language/language-btn.svelte';

	export let legend: boolean = false;

	const data = {
		ar: {
			username: 'اسم المستخدم',
			password: 'كلمة السر',
			forgetPassword: 'نسيت كلمة السر',
			errorMsg: 'كلمة السر أو اسم المستخدم الذي أدخلته غير صحيح',
			login: 'تسجيل الدخول'
		},
		en: {
			username: 'username',
			password: 'password',
			forgetPassword: 'forget password',
			errorMsg: 'The email or password is not valid.',
			login: 'Login'
		},
		tr: {
			username: 'Kullanıcı Adı',
			password: 'Şifre',
			forgetPassword: 'şifre unuttum',
			errorMsg: 'Lütfen geçerli bir e-posta adresi giriniz!',
			login: 'Giriş Yap'
		}
	};
</script>

<section dir={$lang === 'ar' ? 'rtl' : 'ltr'}>
	<div class="logo" />
	<form name="login-form" autocomplete="on" method="POST" use:enhance>
		<label>
			<span>
				{data[$lang].username}:
			</span>
			<input name="username" placeholder={data[$lang].username} autocomplete="username" required />
		</label>
		<label>
			<span>
				{data[$lang].password}:
			</span>
			<input
				type="password"
				name="password"
				placeholder={data[$lang].password}
				autocomplete="current-password"
				required
			/>
		</label>
		<button type="submit">{data[$lang].login}</button>
		<p class="error" class:visible={$page.form?.failed}>{data[$lang].errorMsg}</p>
	</form>
	<div class="lang__container">
		<LanguageBtn {legend} />
	</div>
</section>

<style>
	.error {
		opacity: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1rem;
		border: 0.5px solid red;
		border-radius: 5px;
		color: hsl(0, 100%, 40%);
		font-size: 16px;
		background-color: hsla(0, 100%, 70%, 0.1);
		padding: 0.5rem 1rem 0.5rem 1rem;
	}

	.visible {
		animation: fadeIn 400ms ease;
		opacity: 1;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.lang__container {
		margin: auto auto 0 0;
	}

	section {
		overflow: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		width: 25rem;
		height: 29rem;
		max-width: 80%;
		max-height: 80%;
		padding: 2rem 1rem 1rem 1rem;

		background-color: hsl(0, 0%, 93%);

		border-radius: 1rem;
		outline: 1px solid hsl(0, 0%, 85%);
		box-shadow: 0px 0px 8px 1px hsl(0, 0%, 80%);
	}

	input {
		outline: 0.5px solid hsl(0, 0%, 85%);
		padding-inline-start: 1rem;
	}

	input,
	[type='submit'] {
		border: none;
		height: 2.5rem;
		border-radius: 5px;
	}

	label {
		gap: 0.3rem;
		display: flex;
		flex-direction: column;
	}

	label > span {
		padding-inline-start: 5px;
		text-transform: capitalize;
	}

	input:is(:focus, :focus-visible) {
		outline: 2px solid hsl(35.7, 100%, 70.6%);
		box-shadow: 0px 0px 4px 1px hsl(35.6, 100%, 50.6%);
	}

	/* space for left-to-right written languages */
	[dir='ltr'] [type='submit'] {
		letter-spacing: 0.8px;
	}

	[type='submit'] {
		width: 40%;
		cursor: pointer;
		font-weight: 600;
		margin-left: auto;
		margin-top: 0.5rem;

		background-color: hsl(35.7, 100%, 50.6%);
	}

	[type='submit']:hover {
		color: hsla(0, 0%, 0%, 0.8);
		background-color: hsl(35.7, 100%, 64.6%);
	}

	form {
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.8rem;
	}

	.logo {
		width: 80%;
		min-height: 5rem;

		background-size: 80%;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('/ihya-logo.svg');
	}
</style>
