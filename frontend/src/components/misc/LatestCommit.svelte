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

            function formatDate(dateString) {
                const date = new Date(dateString);
                return date.toLocaleDateString() + " " + date.toLocaleTimeString();
            }
            
            latestCommit = data.slice(0, 6).map(item => ({
                    image: item.image,
                    name: item.name,
                    message: item.message,
                    date: formatDate(item.date),
                    url: item.url,
                }))
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

<main>
    {#if loading}
        <span>Loading...</span>
    {:else if error}
        <span style="color: red;">Failed to fetch: {error}</span>
    {/if}
    
    {#if latestCommit}
        <div>
            <section style="text-align: center;">
                <span class="bigText">Latest Commit (6 commits)</span> <br>
                <span>Click on a commit to view details.</span>
            </section>
            
            {#each latestCommit as commit}
                <a href={commit.url} target="_blank">
                    <section class="left">
                        <img
                            src={commit.image}
                            alt={commit.name}
                            class="avatar"
                            />
                    </section>
                    
                    <section class="right">
                        <span class="bigText">{commit.name}</span>
                        <span>{commit.message}</span>
                        <span class="date">Commited @ {commit.date}</span>
                    </section>
                </a>
            {/each}
        </div>
    {/if}
</main>


<!--  -->

<style>
    div {
        background-color: var(--background);
        border: 2px solid var(--primary);
        padding: 0.75rem 2rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: left;
        align-items: center;
        color: var(--text);
        
        a {
            display: flex;
            gap: 10px;
            text-align: left;
            align-items: center;
            text-decoration: none;
            color: var(--text);
            width: 100%;
            
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
    }
    
    
    .bigText {
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>
