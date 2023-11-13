<script lang="ts">
	export let activity: any;
</script>

<a href="/activities/{activity.id}">
	<img src={activity.profile} alt={activity.name} />
	<h2>{activity.title}</h2>
	<p>{activity.description}</p>
	<span>
		{activity.start_date} - {activity.end_date}
	</span>
</a>

<style>
	img {
		width: 100%;
	}

	a {
		display: flex;
		flex-direction: column;
		position: relative;
		color: black;
		text-decoration: none;
	}

</style>
