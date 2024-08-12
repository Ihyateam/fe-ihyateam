<script lang="ts">
	import Input from '../form/input.svelte';
	import Label from '../form/label.svelte';
	import { PhotoIcon } from '../icons';

	let ProfileImgEl: HTMLImageElement;

	const handleImageChange = (e: Event) => {
		const [file] = (e.target as HTMLInputElement).files as FileList;

		if (file) {
			ProfileImgEl.src = URL.createObjectURL(file);
		}
	};

	let inputEl: HTMLInputElement;
</script>

<div class="card">
	<div class="card__img">
		<img
			class="card__profile"
			src="/no-image.png"
			alt="new activity thumbnail"
			bind:this={ProfileImgEl}
		/>

		<label>
			<span>
				<PhotoIcon height="75%" width="2.5rem" />
			</span>
			<input
				bind:this={inputEl}
				type="file"
				name="photo"
				accept=".png, .jpg, .jpeg"
				on:change={handleImageChange}
			/>
		</label>
	</div>

	<form>
		<Label type="default" label="title">
			<Input name="input-text" />
		</Label>
		<Label type="default" label="description">
			<Input name="input-text" />
		</Label>
		<input class="hidden" bind:this={inputEl} />
	</form>
</div>

<style>
	div.card {
		container-type: inline-size;
		container-name: profile-card;

		position: relative;
		display: flex;
		flex-direction: column;
		align-items: stretch;

		/* lately added */
		background-color: var(--secondary-background-color);
		box-shadow: var(--base-box-shadow);
		outline: var(--base-outline);
		border-radius: 0.25rem;
		font-size: 1.25rem;
		min-height: 70dvh;

		overflow: hidden;
	}

	.card__img {
		display: flex;
		justify-content: center;
		height: 20rem;
		width: 100%;
		overflow: hidden;
		outline: var(--base-outline);
		box-shadow: 0px 2px 8px 0px hsl(188, 100%, 38%, 0.5);
		position: relative;
	}

	img.card__profile {
		object-fit: cover;
		width: 100%;
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
		block-size: 4rem;
		cursor: pointer;
	}

	.card__img > label:hover {
		background-color: hsla(190, 10%, 48.2%, 0.8);
	}

	input[type='file'] {
		display: none;
	}

	form {
		margin-inline: auto;
		margin-block-start: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		width: 80%;
	}

	/* 
	.card__info {
		display: grid;
		grid-auto-columns: 1fr 1fr;
		gap: 1rem;

		width: 100%;
		padding-inline: 1rem;

		margin-block: 2rem;
	}

	.edit-btn {
		justify-self: end;
	}

	.card__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.card__header > h2 {
		margin-block-start: 1rem;
	}

	.card__header > div {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--demphasized-font-color);
	}

	@container profile-card (width < 400px) {
		.edit-btn {
			justify-self: stretch;
		}
	} */
</style>
