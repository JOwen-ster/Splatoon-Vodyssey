<script>
    import videos from '$lib/data/video_objects';
    import VideoCard from '$lib/components/VideoCard.svelte';

    let query = $state("");
    let queryLower = $derived(query.toLowerCase());
    let currentPage = $state(1);
    let itemsPerPage = $state(6); // Changed to 6 items per page

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

    let totalPages = $derived(Math.ceil(filtered_videos.length / itemsPerPage));
    let paginatedVideos = $derived(
        filtered_videos.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        )
    );

    function goToPage(page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
        }
    }

    // Reset to first page when search query changes
    $effect(() => {
        if (query) {
            currentPage = 1;
        }
    });
</script>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Changed to exactly 3 columns */
        width: 100%;
        gap: 10px;
    }

    .search-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 20px 0;
    }

    .pagination button {
        padding: 8px 16px;
        border: 2px solid #f4f5f6;
        border-radius: 5px;
        background-color: transparent;
        color: #f4f5f6;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .pagination button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination button:hover:not(:disabled) {
        background-color: #f4f5f6;
        color: rgb(70, 70, 255);
    }

    .pagination-info {
        color: #f4f5f6;
        margin: 0 20px;
    }
</style>

<div class="search-container">
    <input type="search" class="search-bar" placeholder="Search VODS..." bind:value={query}/>
</div>

<div class="container">
    {#each paginatedVideos as video}
        <VideoCard {...video} />
    {/each}
</div>

{#if filtered_videos.length > itemsPerPage}
    <div class="pagination">
        <button 
            onclick={() => goToPage(1)} 
            disabled={currentPage === 1}
        >
            First
        </button>
        <button 
            onclick={() => goToPage(currentPage - 1)} 
            disabled={currentPage === 1}
        >
            Previous
        </button>
        
        <span class="pagination-info">
            Page {currentPage} of {totalPages}
        </span>

        <button 
            onclick={() => goToPage(currentPage + 1)} 
            disabled={currentPage === totalPages}
        >
            Next
        </button>
        <button 
            onclick={() => goToPage(totalPages)} 
            disabled={currentPage === totalPages}
        >
            Last
        </button>
    </div>
{/if}