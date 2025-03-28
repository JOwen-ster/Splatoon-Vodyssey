<script>
    import videos from '../data/video_objects';
	import VideoCard from '$lib/components/VideoCard.svelte';

    let query = $state("")
    let queryLower = $derived(query.toLowerCase())

	const processed_videos = videos.map(({ title, url, player, tags }) => {
		return {
			title,
			url,
			player,
			tags,
			lowerTitle: title.toLowerCase(),
            lowerPlayer: player.toLowerCase(),
			lowerTags: tags.map((tag) => tag.toLowerCase())
		};
	});

	let filtered_videos = $derived(processed_videos.filter(
		({ lowerTitle, lowerPlayer, lowerTags }) =>
			lowerTitle.includes(queryLower) ||
            lowerPlayer.includes(queryLower) ||
            lowerTags.some((tag) => tag.includes(queryLower))
	));
</script>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, auto);
		width: 100%;
		gap: 10px;
	}

    .search-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10vh;
    }

    .search-bar {
        border: 2px solid #f4f5f6;
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 25px;
        font-weight: bold;
        font-family: monospace;
        background-color: rgb(70, 70, 255);
        color: #f4f5f6;
    }
</style>

<div class="search-container">
    <input type="search" class="search-bar" placeholder="Search VODS..." bind:value={query}/>
</div>

<div class="container">
    {#if query === ""}
        {#each videos as video}
            <VideoCard {...video} />
        {/each}
    {:else}
        {#each filtered_videos as video}
            <VideoCard {...video} />
        {/each}
    {/if}
</div>