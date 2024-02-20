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
	a {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		cursor: alias;
		padding-inline: 0.5rem;
		padding-block: 0.1rem;
		border-radius: 10px;
		background-color: white;
	}
</style>
