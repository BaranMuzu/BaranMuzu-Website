<script>
    class Project {
        constructor(title, description, thumbnail, links) {
            this.title = title;
            this.description = description;
            this.thumbnail = thumbnail;
            this.links = links.map(link => {
                const domain = new URL(link.url).hostname; 
                return {
                    name: link.name,
                    url: link.url,
                    iconUrl: `https://icons.duckduckgo.com/ip3/${domain}.ico`
                };
            });
        }
    }

    const projects = [
        new Project(
            "FNaF 4 on a Friday Night... Funkin'?", 
            "This is a recreation of FNaF 4 in FNF Psych Engine", 
            "fnaf4fnf.png", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/647429" }]
        ),
        new Project(
            "Fridtay Funk Baldi ; Kill Baldi", 
            "This mod is all about Baldi’s Basics fangames! It’s mostly a fun, high-effort troll rather than a serious mod", 
            "killbaldi.png", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/618481" }]
        ),
        new Project(
            "Too Tutelar", 
            "This is a Too Tutelar which is a remix of too slow but.. its between baldi and balsi", 
            "tootutelar.jpg", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/595463" }]
        ),
        new Project(
            "BALD_0S", 
            "A Simple, Short Baldi Basics Mod, What can go wrong?", 
            "bald0s.png", 
            [
                { name: "GameBanana", url: "https://gamebanana.com/mods/590499" },
                { name: "Itch.io", url: "https://baranmuzu.itch.io/bald-0s" },
                { name: "Game Jolt", url: "https://gamejolt.com/games/bald0s/988147" }
            ]
        ),
        new Project(
            "Tutelary [Anemaniac Baldi Mix]", 
            "A Friday Night Funkin Mod", 
            "tutelary.jpg", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/588049" }]
        ),
        new Project(
            "VS Tabi Pico Mix", 
            "A Friday Night Funkin Mod", 
            "vstabipicomix.jpg", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/580976" }]
        ),
        new Project(
            "QT Rewired Psych Engine Port", 
            "A Friday Night Funkin Psych Port", 
            "QTPSYCH.jpg", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/573962" }]
        ),
        new Project(
            "Exclusive Pico Mixes", 
            "A Friday Night Funkin Mod Pack", 
            "exclusivepico.jpg", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/548433" }]
        ),
        new Project(
            "Tabi Revival [Psych Engine]", 
            "A Friday Night Funkin Psych Port", 
            "tabipsych.jpg", 
            [{ name: "GameBanana", url: "https://gamebanana.com/mods/585916" }]
        )
    ];

    const thePath = "/assets/images/projects/";
</script>

<main>
    <h1 class="title">Take a look at the projects I've contributed to!</h1>

    <div class="list-container">
        {#each projects as project}
            <div class="project-card">
                <div class="image-section">
                    <img src="{thePath}{project.thumbnail}" alt={project.title} />
                </div>
                
                <div class="info-section">
                    <h2 class="project-title">{project.title}</h2>
                    
                    <div class="expanded-info">
                        <p class="desc">{project.description}</p>
                        <div class="links">
                            {#each project.links as link}
                                <a href={link.url} target="_blank" class="link-btn">
                                    <img src={link.iconUrl} alt={link.name} />
                                    <span>{link.name}</span>
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    .title {
        color: var(--primary);
        font-size: 2.2rem;
        margin-bottom: 3rem;
        text-align: center;
        max-width: 1000px;
    }

    .list-container {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        width: 100%;
        max-width: 700px;
    }

    .project-card {
        width: 100%;
        border: 3px solid var(--primary);
        border-radius: 12px;
        background-color: transparent;
        overflow: hidden;
        transition: transform 0.2s ease;
    }

    .project-card:hover {
        transform: scale(1.02);
    }

    .image-section {
        width: 100%;
        padding: 15px 15px 0 15px;
        box-sizing: border-box;
    }

    .image-section img {
        width: 100%;
        height: auto;
        border-radius: 6px;
        display: block;
        object-fit: contain;
    }

    .info-section {
        padding: 1.5rem;
        text-align: center;
    }

    .project-title {
        font-size: 1.8rem;
        margin: 0;
        color: #fff;
    }

    .expanded-info {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height 0.4s ease, opacity 0.3s ease, margin-top 0.3s ease;
    }

    .project-card:hover .expanded-info {
        max-height: 400px;
        opacity: 1;
        margin-top: 1.2rem;
    }

    .desc {
        color: #ddd;
        font-size: 1rem;
        margin-bottom: 1.5rem;
        line-height: 1.4;
    }

    .links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .link-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #111;
        color: #eee;
        padding: 8px 16px;
        border-radius: 8px;
        text-decoration: none;
        border: 1px solid #333;
        font-weight: bold;
        font-size: 0.95rem;
        transition: all 0.2s ease;
    }

    .link-btn:hover {
        background: var(--primary);
        color: #000;
        border-color: #fff;
    }

    .link-btn img {
        width: 18px;
        height: 18px;
    }
</style>