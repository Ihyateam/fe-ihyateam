<script lang="ts">
	import { enhance } from '$app/forms';
	import ActivitySave from '$lib/components/activity/activity-save.svelte';
	import Input from '$lib/components/form/input.svelte';
	import Label from '$lib/components/form/label.svelte';
	import { PhotoIcon } from '$lib/components/icons';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UpperBanner from '$lib/components/ui/upper-banner.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';
	import type { AcceptLang } from '$lib/types';

	const config = {
		ar: {
			first_name: 'الاسم الأول',
			last_name: 'الاسم الأخير',
			email: 'البريد الإلكتروني',
			age: 'العمر',
			username: 'اسم المستخدم',
			password: 'كلمة المرور',
			repeat_password: 'تأكيد كلمة المرور'
		},
		en: {
			first_name: 'first name',
			last_name: 'last name',
			email: 'email',
			age: 'age',
			username: 'username',
			password: 'password',
			repeat_password: 'repeat password'
		},
		de: {
			first_name: 'Vorname',
			last_name: 'Nachname',
			email: 'Email',
			age: 'Alter',
			username: 'Benutzername',
			password: 'Passwort',
			repeat_password: 'Passwort wiederholen'
		}
	};

	const handleImageChange = (e: Event) => {
		const [file] = (e.target as HTMLInputElement).files as FileList;

		if (file) ProfileImg.src = URL.createObjectURL(file);
	};

	let ProfileImg: HTMLImageElement;
	export let lang: AcceptLang = 'ar';
</script>

<PageLayout>
	<header slot="header">
		<UpperBanner>
			<h1>create user</h1>
		</UpperBanner>
	</header>

	<svelte:fragment slot="body">
		<form dir="ltr" method="POST" action="?/create" use:enhance>
			<div class="card__img">
				<img
					bind:this={ProfileImg}
					class="card__profile"
					src="/no-image.png"
					alt="insert new user's profile pic"
				/>
				<label>
					<span>
						<PhotoIcon height="75%" width="1.5rem" />
					</span>
					<input
						type="file"
						name="photo"
						accept=".png, .jpg, .jpeg"
						on:change={handleImageChange}
					/>
				</label>
			</div>
			<fieldset>
				<Label label={config[lang].first_name}>
					<Input name="first_name" placeholder={config[lang].first_name} />
				</Label>
				<Label label={config[lang].last_name}>
					<Input name="last_name" placeholder={config[lang].last_name} />
				</Label>
				<Label label={config[lang].email}>
					<Input name="email" placeholder={config[lang].email} />
				</Label>
				<Label label={config[lang].password}>
					<Input name="password" type="password" placeholder={config[lang].password} />
				</Label>
				<Label label={config[lang].repeat_password}>
					<Input
						name="passwordConfirm"
						type="password"
						placeholder={config[lang].repeat_password}
					/>
				</Label>
				<div class="try">
					<ActivitySave type="submit" legend={true} on:click={() => history.back()} />
				</div>
			</fieldset>
		</form>
	</svelte:fragment>
</PageLayout>

<style>
	.card__img {
		display: flex;
		justify-content: center;
		height: 15rem;
		width: 15rem;
		border-radius: 50%;
		overflow: hidden;
		outline: var(--base-outline);
		box-shadow: 0px 2px 8px 0px hsl(188, 100%, 38%, 0.5);
		position: relative;
	}

	input[type='file'] {
		display: none;
	}

	.card__img > label {
		position: absolute;
		inset-block-end: 0;
		background-color: hsla(190, 2.4%, 48.2%, 0.5);
		backdrop-filter: blur(5px);
		color: hsla(0, 0%, 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		inline-size: 100%;
		block-size: 2rem;
		cursor: pointer;
	}

	.card__img > label:hover {
		background-color: hsla(190, 10%, 48.2%, 0.8);
	}

	.card__img > img {
		width: 100%;
		object-fit: cover;
	}

	form {
		background-color: var(--secondary-background-color);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		outline: var(--base-outline);
		align-items: center;
		padding: 1rem;
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}

	fieldset {
		border: none;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: 100%;
	}

	div.try {
		display: flex;
		align-items: center;
		padding-inline-end: 2rem;
		padding-block: 1rem;
	}
</style>
