<script lang="ts">
	import { LinkIcon } from '../icons';

	export let activity_id: string;
</script>

<td data-cell="activity_id">
	<a href="/activities/{activity_id}">
		<span>
			{activity_id}
		</span>
		<LinkIcon width="1.5rem" height="1.5rem" />
	</a>
</td>

<style>
	td {
		width: 100px;
	}

	a {
		display: flex;
		align-items: center;
		cursor: alias;
		border-radius: 8px;
		gap: 0.5rem;
		padding-inline-start: 0.75rem;
		padding-inline-end: 0.25rem;
		padding-block: 0.15rem;
		color: currentColor;
		outline-offset: 2px;
	}

	a:hover {
		background-color: var(--gold-color-3);
		outline: 2px dashed black;
	}

	a:visited {
		color: currentColor;
	}
</style>
