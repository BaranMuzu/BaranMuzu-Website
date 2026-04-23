<script>
    import { onMount } from "svelte";

    const url = "https://wakatime.com/share/@BaranMuzu/d7220c14-02cb-4217-8684-453e65f5545a.json"
    const badgeUrl = "https://wakatime.com/badge/user/6a866ffe-cf3a-4913-a6c1-1f048272c5c5.svg"
    
    let loading = true;
    let error = false;
    let errMSG = null;
    let wakatimeData = null;
    let topCount = null;
    
    async function main() {
      try {
        const request = await fetch(url)
        const result = await request.json()
        
        let killthisshit = result.data.filter(lang => lang.name !== "Other");
        let dataToEat = topCount ? killthisshit.slice(0, topCount) : killthisshit;
        
        wakatimeData = dataToEat.map(lang => ({
          name: lang.name,
          text: lang.text,
          color: lang.color
        }))
        
      } catch(err) {
        loading = false;
        error = true;
        return errMSG = err.message
      } finally {
        loading = false;
      }
    }
    
    onMount(async () => {
      main();
    })
</script>

<main class="wakaContainer">
    <span class="bigText">📊 Stats:</span>
    
    <img src={badgeUrl} alt="WakaTime Badge" class="wakaBadge" />
    
    <section class="statsGrid">
        {#if loading}
            <span class="statusText">Loading...</span>
        {:else if error && errMSG}
            <span class="statusText errorText">Error: {errMSG}</span>
        {:else if wakatimeData}
            {#each wakatimeData as lang}
                <div class="langCard">
                    <span class="colorDot" style="background-color: {lang.color};"></span>
                    <span class="langName">{lang.name}</span>
                    <span class="langTime">{lang.text}</span>
                </div>
            {/each}
        {/if}
    </section>
</main>

<style>
    .wakaContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        text-align: center;
        width: 100%;
        font-family: inherit;
    }
    
    .bigText {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .wakaBadge {
        height: 30px;
        user-select: none;
        pointer-events: none;
        margin-top: -0.5rem;
    }

    .statsGrid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem;
        max-width: 900px;
    }

    .langCard {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        min-width: 250px;
        width: max-content;
        padding: 0.5rem 0.75rem;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 0.25rem;
        transition: all 150ms ease-in-out;
        user-select: none;
        box-sizing: border-box;
    }

    .langCard:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
        background-color: rgba(255, 255, 255, 0.1);
    }

    .colorDot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
        flex-shrink: 0;
    }

    .langName {
        font-weight: 600;
        color: white;
        white-space: nowrap;
    }

    .langTime {
        font-size: 0.9rem;
        color: #cccccc; 
        margin-left: auto;
        white-space: nowrap;
    }

    .statusText {
        color: #cccccc;
        font-weight: 600;
        padding: 2rem;
    }

    .errorText {
        color: #ff4d4d;
    }
</style>