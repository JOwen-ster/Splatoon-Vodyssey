<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
</script>

<style>
    :global(body, html) {
        background: #0b0b0b;
        margin: 0;
        padding: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>
<div class="container">
    <Header/>
    <RedirectButton/>
</div>


