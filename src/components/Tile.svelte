<script lang="ts">
    import type { NewsArticle } from "../dataObjects/objects";

    /** @param {NewsArticle} value */
    export let article: NewsArticle;
</script>

<section>
    <h3>{article.title}</h3>
    <p>{article.body}</p>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        height: 300px;
        flex-direction: column;
        background-color: var(--carrot-orange);
        border-radius: var(--border-radius);
    }
</style>
