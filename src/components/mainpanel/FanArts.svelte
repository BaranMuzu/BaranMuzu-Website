<script>
    import SubmitArt from "../misc/SubmitArt.svelte";
    
    class ArtistGroup {
        constructor(artistName, artistURL, artworks) {
            this.artistName = artistName;
            this.artistURL = artistURL;
            this.artworks = artworks; 
        }
    }

    const galleries = [
        new ArtistGroup("@taylorsucksbruh", "https://www.youtube.com/channel/UCjOkXP2mfyH-x9RTrMS1kug", [
            { img: "AFTERALL-.png" }, { img: "baranbday.png" }, { img: "baranhellyah.png" },
            { img: "baransad.png" }, { img: "baranwaersoutfitophelia.png" }, { img: "ÇALIŞSANAAMINAKODUĞUMUNUNİTYSİ.png" },
            { img: "DWAKJŞLDASŞLDWAKD.png" }, { img: "inamk.png" }, { img: "nikoran.png" },
            { img: "fnfmobiletuhmbail.png" }, { img: "iatethia.png" }
        ]),
        new ArtistGroup("@curiouschrononaut", "https://www.youtube.com/channel/UC1dA53U0RAzhroX6X8tcEHQ", [
            { img: "umm.png" }, { img: "baran.png" }, { img: "Baslksz1054_20240919223959.png" },
            { img: "EKMEQARASIBARANRANRANN.png" }, { img: "sanaber.png" }, { img: "baranwaaa.png" }
        ]),
        new ArtistGroup("KhRo_ Dreemurr", "https://www.youtube.com/channel/UCpy2SmO6ATsn1KKmJwzQ42g", [
            { img: "barannewoc.png" }, { img: "BARANSHOCKJ.png" }, { img: "undertal.png" },
            { img: "undertalebarancolored.png" }, { img: "yey.webp" }, { img: "khrogang.png" },
            { img: "idktimetrio.png" }, { img: "ohsupdude.png" }, { img: "baranandkhrobirthday.png" },
            {img: "bannergang.png"}, {img: "imhigh.png"}, {img: "imtallig.png"}
        ]),
        new ArtistGroup("Other Awesome Artists", null, [
            { img: "barangafa.png", by: "Flazeboi" },
            { img: "farmerhat.png", by: "Farmer", link: "https://www.youtube.com/@HistoryLoverFarmer" },
            { img: "bawanmuzuhead_enhanced.png", by: "daveberry", link: "https://daveberry.netlify.app/" },
            { img: "BARAN HELL YAEH.png", by: "bellitalmao", link: "https://bsky.app/profile/bellitalmao.bsky.social" },
            { img: "baran if he crashed out.png", by: "ananophanes1988", link: "https://www.youtube.com/@ananophanes1988" },
            { img: "naberbebeeeekk.png", by: "ananophanes1988", link: "https://www.youtube.com/@ananophanes1988" },
            { img: "baranboydan.png", by: "ilikebroom", link: "https://www.youtube.com/channel/UCf4yWt5zo6ZvUX4vPIhjMSQ" },
            { img: "baranvsbroom.png", by: "ilikebroom", link: "https://www.youtube.com/channel/UCf4yWt5zo6ZvUX4vPIhjMSQ" },
            { img: "park.png", by: "darksyspiral" }
        ])
    ];

    const thePathh = "/assets/images/fan-arts/";
</script>

<main>
    <h1 class="center bigText title">Fan Arts Gallery</h1>

    <div class="gallery-container">
        {#each galleries as gallery}
            <section class="artist-section">
                <h2 class="artist-name">
                    {#if gallery.artistURL}
                        Art by <a href={gallery.artistURL} target="_blank">{gallery.artistName}</a>
                    {:else}
                        {gallery.artistName}
                    {/if}
                </h2>

                <div class="art-grid">
                    {#each gallery.artworks as art}
                        <div class="art-card">
                            <img src="{thePathh}{art.img}" alt="Fan art" class="thumbnail" />
                            
                            <img src="{thePathh}{art.img}" alt="Fan art full" class="hover-img" />

                            {#if art.by}
                                <span class="artist-credit">
                                    by 
                                    {#if art.link}
                                        <a href={art.link} target="_blank">{art.by}</a>
                                    {:else}
                                        {art.by}
                                    {/if}
                                </span>
                            {/if}
                        </div>
                    {/each}
                </div>
            </section>
            
            <hr class="divider" />
        {/each}
    </div>
    
    <section>
        <h1 style="color: var(--primary)">Want to submit your art?</h1>
        <p>Submit it here! But please, don't spam-</p>
        <SubmitArt />
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        text-align: center;
        padding: 2rem;
    }

    .title {
        color: var(--primary);
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .gallery-container {
        width: 100%;
        max-width: 1200px;
    }

    .artist-section {
        margin-bottom: 3rem;
    }

    .artist-name {
        font-size: 1.8rem;
        color: var(--text);
        margin-bottom: 1.5rem;
    }

    .artist-name a {
        color: var(--primary);
        text-decoration: none;
    }

    .artist-name a:hover {
        text-decoration: underline;
    }

    .art-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .art-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #000;
        border: 3px solid var(--primary);
        border-radius: 12px;
        padding: 10px;
        transition: transform 0.2s ease;
        gap: 8px;
        position: relative;
    }

    .art-card:hover {
        transform: scale(1.05);
        z-index: 10;
    }

    .art-card .thumbnail {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 6px;
        background-color: #222;
    }

    .art-card .hover-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s 0.2s;
        
        max-width: 350px; 
        max-height: 350px;
        width: auto;
        height: auto;
        
        object-fit: contain; 
        
        background-color: #000;
        border: 3px solid var(--primary);
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.9);
        z-index: 20;
        pointer-events: none;
    }

    .art-card:hover .hover-img {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%) scale(1);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s 0s;
    }

    .artist-credit {
        font-size: 0.9rem;
        color: #eee;
    }

    .artist-credit a {
        color: var(--primary);
        text-decoration: none;
    }

    .divider {
        width: 100%;
        border: none;
        border-top: 2px solid var(--border);
        margin: 2rem 0;
        opacity: 0.3;
    }

    .bigText {
        font-weight: bold;
    }
</style>