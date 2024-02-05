<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { TelphoneIcon, NoTelephoneIcon } from '../icons';

	export let user: UserEntity;
</script>

<div>
	{#if user.telphone}
		<a
			href={`https://wa.me/${user.telphone.replaceAll(' ', '').trim().replace('+', '')}`}
			target="_blank"
		>
			<span dir="ltr">{user.telphone}</span>
			<TelphoneIcon width="1.5rem" height="100%" />
		</a>
	{:else}
		<span>لا يوجد رقم</span><NoTelephoneIcon width="1.5rem" height="100%" />
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		width: 100%;
	}

	div > * {
		flex-grow: 1;
		min-width: 0;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		cursor: alias;
	}

	a:hover {
		outline: 2px dashed var(--base-outline-color);
	}
</style>
