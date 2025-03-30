<script>
    let { title="Title", video_url="/SplatoonVodsIntro.mp4", player="player", tags=['tag1', 'tag2', 'tag3'] } = $props()
    // wrap player name in an <a> tag to link to the player's page
    // ::after underline
</script>

<style>
    .card {
        display: flex;
        flex-direction: column;
        border: 3px solid #f4f5f6;
        border-radius: 25px;
        margin: 20px;
    }

    .element-video {
        color: black;
        width: 100%;
        border-radius: 20px 20px 0 0px;
    }

    .element-header-container {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #f4f5f6;
        padding: 5% 0;
    }

    .element-title {
        color: #f4f5f6;
        padding: 0 0 0 5%;
        margin: 0;
    }

    .element-player {
        font-weight: bold;
        padding: 0 0 0 5%;
        margin: 0;
        color: red;
    }

    .element-tag-container {
        display: flex;
        justify-content: left;
        padding: 0 0 0 5%;
        margin: 20px 0;
        gap: 10px;
    }

    .element-tag-container-item {
        color: #f4f5f6;
        border: 1px solid #f4f5f6;
        border-radius: 20px;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: bold;
        font-family: monospace;
        transition: all 0.3s ease-in-out;
    }

    .element-tag-container-item:hover {
        background-color: #f4f5f6;
        color: black;
    }
</style>

<div class="card">
    <video preload="metadata" class="element-video" controls>
        <source src={video_url} type="video/mp4" />
        <track src="captions.vtt" kind="captions" srclang="en" label="English Captions" />
    </video>

    <div class="element-header-container">
        <h3 class="element-title">{title}</h3>
        <span class="element-player">{player}</span>    
    </div>

    <div class="element-tag-container">
        {#each tags as tag}
            <span class="element-tag-container-item">{tag}</span>
        {/each}
    </div>
</div>
