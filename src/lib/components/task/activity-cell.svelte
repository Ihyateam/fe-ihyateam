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
		text-decoration: none;
		color: currentColor;
		padding-inline-start: 0.75rem;
		padding-inline-end: 0.25rem;
		padding-block: 0.15rem;

		background-color: hsla(186, 62%, 62%, 0.3);
	}

	a:hover {
		background-color: var(--gold-color-1);
		outline: 2px dashed black;
		outline-offset: 2px;
	}
</style>
