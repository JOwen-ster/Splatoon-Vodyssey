<script lang="ts">
    import "./global.css";
    import Header from "$lib/components/Header.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
</script>

<style> 
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


