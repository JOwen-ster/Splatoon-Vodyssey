<script>
    let { title="Title", video_url="/SplatoonVodsIntro.mp4", player="player", tags=['tag1', 'tag2', 'tag3'] } = $props()
</script>

<style>
    .item {
        display: flex;
        flex-direction: column;
        border: 5px solid #f4f5f6;
        margin: 50px
    }

    .element-title {
        color: #f4f5f6;
    }

    .element-video {
        color: black;
        width: 100%
    }

    .element-tag-container {
        display: flex;
        gap: 10px;
    }

    .element-tag-container-player {
        color: red;
    }

    .element-tag-container-item {
        color: #f4f5f6;
    }
</style>

<div class="item">
    <h3 class="element-title">{title}</h3>
    <video preload="metadata" class="element-video" controls>
        <source src={video_url} type="video/mp4" />
        <track src="captions.vtt" kind="captions" srclang="en" label="English Captions" />
    </video>
    <span class="element-tag-container-player">{player}</span>
    <div class="element-tag-container">
        {#each tags as tag}
            <span class="element-tag-container-item">{tag}</span>
        {/each}
    </div>
</div>
