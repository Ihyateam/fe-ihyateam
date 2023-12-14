<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { NewTaskIcon } from '$lib/components/icons';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import TableDialog from '$lib/components/layouts/table-dialog.svelte';
	import { dateFormater } from '$lib/utils/date-formater.js';

	let config = {
		ar: {
			headerObj: {
				user: 'المستفيد',
				comment: 'التعليق',
				createdAt: 'تاريخ المهمة',
				isPaid: 'تم الدفع'
			},
			tasks: 'مهام',
			new_task: 'مهمة جديدة'
		}
	};

	let dialogEl: HTMLDialogElement;

	function handleNewTaskDialog() {
		if (dialogEl.open) {
			dialogEl.close();
			return;
		}
		dialogEl.showModal();
	}

	function useDialog(node: HTMLDialogElement) {
		function handleClickOutSide(e: MouseEvent) {
			if (e.target instanceof HTMLElement && e.target?.id === 'dialog-container') node.close();
		}
		node.addEventListener('click', handleClickOutSide);
		return {
			destroy() {
				node.removeEventListener('click', handleClickOutSide);
			}
		};
	}

	export let data;
</script>

<PageLayout>
	<header slot="header">
		<span>{data.tasks?.length} {config['ar'].tasks}</span>
		{#if $page.params.id === data.user.id}
			<button on:click={handleNewTaskDialog}>
				{config['ar'].new_task}
				<NewTaskIcon width="22px" height="22px" />
			</button>
		{/if}
	</header>

	<svelte:fragment slot="body">
		<TableDialog headerObj={config['ar'].headerObj} arr={data.tasks} let:row>
			<td>{row.id}</td>
			<td>{row.comment}</td>
			<td>{row.at_date}</td>
			<td>{Math.random() > 0.5 ? 'نعم' : 'لا'}</td>
		</TableDialog>
	</svelte:fragment>
</PageLayout>

<dialog id="dialog-container" bind:this={dialogEl} use:useDialog>
	<div id="dialog-div">
		<form method="POST" action="?/create" use:enhance>
			<label><input type="text" name="comment" placeholder="enter a comment" /></label>
			<label><input name="beneficiary" value={data.user.id} inert /></label>
			<label
				><input
					type="date"
					name="date_at"
					max={dateFormater(new Date(), { forInputDate: true })}
				/></label
			>
			<button type="submit" on:click={handleNewTaskDialog}>close</button>
		</form>
	</div>
</dialog>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2rem;

		& > button {
			position: relative;
			display: flex;
			justify-content: center;
			cursor: pointer;
			border: none;
			align-items: center;
			padding: 0.5rem 0 0.5rem 0;
			width: 20ch;
			gap: 0.25rem;
			border-radius: 0.5rem;
			text-decoration: none;
			background-color: var(--secondary-background-color);
			color: var(--accent-color);

			&:hover {
				background-color: var(--gold-color-1);
			}
		}
	}

	dialog {
		top: 0;
		z-index: 2;
		left: 0;
		width: 50svw;
		height: 90svh;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--full-box-shadow);
		transform: translate(25svw, 5svh);
		border: none;
		border-radius: 10px;
		overflow: auto;

		& > #dialog-div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100%;
		}
	}

	dialog::backdrop {
		backdrop-filter: blur(2px);
	}

	input[inert] {
		background-color: var(--secondary-background-color);
		cursor: not-allowed;
	}
</style>
