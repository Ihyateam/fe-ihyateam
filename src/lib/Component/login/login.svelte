<script lang="ts">
	import { enhance } from '$app/forms';
	import LanguageBtn from '../language/language-btn.svelte';

	const data = {
		ar: {
			username: 'اسم المستخدم',
			password: 'كلمة السر',
			forgetPassword: 'نسيت كلمة السر',
			login: 'تسجيل الدخول'
		},
		en: {
			username: 'username',
			password: 'password',
			forgetPassword: 'forget password',
			login: 'login'
		}
	};
	const lang: 'ar' | 'en' | 'tr' = 'ar';
</script>

<section dir={lang === 'ar' ? 'rtl' : 'ltr'}>
	<div class="logo" />
	<form name="login-form" autocomplete="on" method="POST" action="/auth?/login" use:enhance>
		<label
			>{data[lang].username}:
			<input name="username" placeholder={data[lang].username} autocomplete="username" />
		</label>
		<label
			>{data[lang].password}:
			<input
				type="password"
				name="password"
				placeholder={data[lang].password}
				autocomplete="current-password"
			/>
		</label>
		<button type="submit">{data[lang].login}</button>
	</form>
	<div class="lang__container">
		<LanguageBtn />
	</div>
</section>

<style>
	.lang__container {
		margin: auto auto 0 0;
	}

	section {
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

		background-color: rgb(236, 236, 236);

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

	input:is(:focus, :focus-visible) {
		outline: 2px solid hsl(35.7, 100%, 70.6%);
		box-shadow: 0px 0px 4px 1px hsl(35.6, 100%, 50.6%);
	}

	[type='submit'] {
		width: 40%;
		cursor: pointer;
		font-weight: 800;
		margin-left: auto;
		margin-top: 0.5rem;

		text-transform: uppercase;
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
		height: 5rem;

		background-size: 80%;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('/ihya-logo.svg');
	}
</style>
