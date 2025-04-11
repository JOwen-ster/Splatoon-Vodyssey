<script lang="ts">
	let {
		title = 'Title',
		video_url = '/SplatoonVodsIntro.mp4',
		player = 'Player',
		social_link = 'https://example.com',
		tags = ['no tag(s) specified']
	} = $props();
</script>

<div class="card">
	<video class="card-video" controls>
		<source src={video_url} type="video/mp4"/>
		<track kind="captions"/>
	</video>

	<div class="card-header-container">
		<h3 class="card-title">{title}</h3>
		<span>
            <a class="card-player-name" href={social_link} target="_blank">
                {player}
            </a>
        </span>
	</div>

	<div class="card-tag-container">
		{#each tags as tag}
			<span class="card-tag">{tag}</span>
		{/each}
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		margin: 0 25px;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;
		border-radius: 20px;
		transition: box-shadow 0.3s ease-in-out;
	}

	.card:hover {
		box-shadow: rgba(70, 70, 255, 1) 0px 5px 50px;
	}

	.card-video {
		color: black;
		width: 100%;
		border-radius: 20px 20px 0 0;
	}

	.card-header-container {
		display: flex;
		flex-direction: column;
		padding: 5% 0 5% 5%;
		background-color: #f4f5f6;
	}

	.card-title {
		color: #0d0d0d;
		cursor: default;
		margin: 0;
	}

	.card-player-name {
		font-weight: bold;
		color: red;
		text-decoration: none;
		transition: text-decoration 0.3s ease-in-out;
	}

	.card-player-name:hover {
		text-decoration: underline;
	}

	.card-tag-container {
		display: flex;
		flex-wrap: wrap;
		flex-grow: 1;
		justify-content: left;
		border-radius: 0px 0px 20px 20px;
		padding: 5% 0 5% 5%;
		gap: 10px;
		background-color: #e8e8e8;
	}

	.card-tag {
		color: #0d0d0d;
		border: 1px solid #0d0d0d;
		border-radius: 20px;
		padding: 5px 10px;
		font-size: 16px;
		font-weight: bold;
		font-family: monospace;
		cursor: default;
	}
</style>
