<script>
    let { title="Title", video_url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", tags=['Tag1', 'Tag2', 'Tag3'] } = $props()
</script>

<style>
    .element {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .element-title {
        color: white;
    }

    .element-video {
        color: white;
    }

    .element-tag-container {
        display: flex;
        gap: 10px;
        color: white;
    }

    .element-tag-container-item {
        color: white;
    }
</style>

<div class="element">
    <h6 class="element-title">{title}</h6>
    <video class="element-video" controls>
        <source src={video_url} type="video/mp4" />
        <track src="captions.vtt" kind="captions" srclang="en" label="English Captions" />
    </video>
    <div class="element-tag-container">
        {#each tags as tag}
            <div class="element-tag-container-item">{tag}</div>
        {/each}
    </div>
</div>