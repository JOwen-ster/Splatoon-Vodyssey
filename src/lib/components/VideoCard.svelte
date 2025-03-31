<script>
    let { title="Title", video_url="/SplatoonVodsIntro.mp4", player="player", social_link="https://example.com",tags=['tag1', 'tag2', 'tag3'] } = $props()
    // wrap player name in an <a> tag to link to the player's page
    // ::after underline
</script>

<style>
    .card {
        display: flex;
        flex-direction: column;
        margin: 0 25px;
        box-shadow: rgba(0, 0, 0, 0.30) 0px 5px 15px;
        border-radius: 20px;
    }

    .element-video {
        color: black;
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    .element-header-container {
        display: flex;
        flex-direction: column;
        padding: 5% 0 5% 5%;
        background-color: #f4f5f6;
    }

    .element-title {
        color: #0d0d0d;
        margin: 0;
    }

    .element-player {
        font-weight: bold;
        color: red;
    }

    .element-tag-container {
        display: flex;
        justify-content: left;
        border-radius: 0px 0px 20px 20px;
        padding: 5% 0 5% 5%;
        gap: 10px;
        background-color: #e8e8e8;
    }

    .element-tag-container-item {
        color: #0d0d0d;
        border: 1px solid #0d0d0d;
        border-radius: 20px;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: bold;
        font-family: monospace;
        transition: all 0.3s ease-in-out;
        cursor: default;
    }

    .element-tag-container-item:hover {
        background-color: #0d0d0d;
        color: #f4f5f6;
    }
</style>

<div class="card">
    <video preload="metadata" class="element-video" controls>
        <source src={video_url} type="video/mp4" />
        <track src="captions.vtt" kind="captions" srclang="en" label="English Captions" />
    </video>

    <div class="element-header-container">
        <h3 class="element-title">{title}</h3>
        <span><a href={social_link} aria-label="social_link" target="_blank" class="element-player">{player}</a></span>  
    </div>

    <div class="element-tag-container">
        {#each tags as tag}
            <span class="element-tag-container-item">{tag}</span>
        {/each}
    </div>
</div>
