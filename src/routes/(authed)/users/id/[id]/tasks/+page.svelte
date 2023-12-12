<script lang="ts">
	import { page } from '$app/stores';
	import { NewTaskIcon } from '$lib/components/icons';
	import Table from '$lib/components/layouts/Table.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';

	let config = {
		ar: {
			user: 'المستفيد',
			comment: 'التعليق',
			createdAt: 'تاريخ المهمة',
			isPaid: 'تم الدفع'
		},
		tasks: 'مهام',
		new_task: 'مهمة جديدة'
	};

	let dialogEl: HTMLDialogElement;

	function handleNewTaskButton() {
		dialogEl.showModal();
	}

	export let data;
</script>

<PageLayout>
	<header slot="header">
		<span>{data.tasks?.length} {config.tasks}</span>
		{#if $page.params.id === data.user.id}
			<button on:click={handleNewTaskButton}>
				{config.new_task}
				<NewTaskIcon width="22px" height="22px" />
			</button>
		{/if}
	</header>

	<svelte:fragment slot="body">
		<Table
			baseUrl={`/users/id/${$page.params.id}/tasks`}
			headerObj={config['ar']}
			arr={data.tasks ?? []}
			let:row
		>
			<td>{row.id}</td>
			<td>{row.comment}</td>
			<td>{row.at_date}</td>
			<td>{Math.random() > 0.5 ? 'نعم' : 'لا'}</td>
		</Table>
	</svelte:fragment>
</PageLayout>

<dialog bind:this={dialogEl}>
	<div>
		<h1>hello</h1>
	</div>
	<button on:click={() => dialogEl.close()}>close</button>
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
		left: 0;
		width: 40svw;
		height: 40svh;
		transform: translate(30svw, 30svh);
		border: none;
		border-radius: 10px;
	}

	dialog[open] {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
