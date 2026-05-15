<script>
    const url = `${import.meta.env.PUBLIC_SERVER}/api/github-latest-commit`;

    let latestCommit = null;
    let loading = true;
    let error = null;

    async function fetchLatestCommit() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Fetching failed. What a skill issue.");
            const data = await response.json();
            latestCommit = data[0] || data;
        } catch (err) {
            error = err.message;
            console.error(err);
        } finally {
            loading = false;
        }
    }

    fetchLatestCommit();
</script>

<!--  -->

{#if loading}
    <span>Loading...</span>
{:else if error}
    <span style="color: red;">Failed to fetch: {error}</span>
{/if}

{#if latestCommit}
<a href={latestCommit.url} target="_blank">
    <section class="left">
        <img
            src={latestCommit.image}
            alt={latestCommit.name}
            class="avatar"
        />
    </section>
    
    <section class="right">
        <span class="bigText">{latestCommit.name}</span>
        <span>{latestCommit.message}</span>
        <span class="date">Commited @ {latestCommit.date}</span>
    </section>
</a>
{/if}

<!--  -->

<style>
    a {
        background-color: var(--background);
        border: 2px solid var(--primary);
        padding: 0.75rem 1rem;
        border-radius: 10px;
        display: flex;
        gap: 5px;
        text-align: left;
        align-items: center;
        text-decoration: none;
        color: var(--text);
        
        .left {
            .avatar {
                width: 45px;
                height: 45px;
                border-radius: 100%;
            }
        }
        
        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;

            .date {
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.5);
            }
        }

        transition: scale 0.15s ease-in-out;
        &:hover {
            scale: 1.05;
            cursor: pointer;
        }
    }
    
    .bigText {
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>
