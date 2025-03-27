<script lang="ts">
    import "$lib/base.css";

</script>

<style>
    .redirect-button-style {
        text-decoration: none;
        color: var(--clean-white);
        border: 1px solid rgb(70, 70, 255);
        border-radius: 25px;
        font-size: 25px;
        font-weight: bold;
        font-family: monospace;
        background-color: rgb(70, 70, 255);
        padding: 10px 20px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px rgba(70, 70, 255, 0.5);
    }

    .redirect-button-style:hover {
        background-color: #0b0b0b;
        border: 1px solid var(--clean-white);
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(255, 255, 255, 1);
    }
</style>

<a class="redirect-button-style" href="/vods">Take me to VODS</a>
