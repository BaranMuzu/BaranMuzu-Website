<script>
    class Credits {
      constructor(name, image, quote, role, links) {
        this.name = name;
        this.image = image;
        this.quote = quote;
        this.role = role;
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
    
    const credits = [
      new Credits(
        "BaranMuzu",
        "/assets/images/spin.gif",
        "insert baran's funny quote here",
        "Helped with Astro + Svelte rework.",
        []
      ),
      
      new Credits(
        "Daveberry",
        "https://codedave.pages.dev/assets/images/Daveberry%20Wave.png",
        "what the helly why is it so smooth...",
        "Helped with Astro + Svelte rework. Made the interface.",
        [
          { name: "Website", url: "https://codedave.pages.dev" },
          { name: "GitHub", url: "https://github.com/daveberrys" }
        ]
      ),
    ];
</script>

<main>
    <span class="bigText">Take a look who contributed to this website!</span>
    
    <div class="parent">
        {#each credits as credit}
            <div class="content">
                <img
                    src={credit.image}
                    alt={credit.name}
                    class="profilePicture"
                />
                <section>
                    <span class="bigText">{credit.name}</span>
                    <span>{credit.role}</span>
                    <section class="expand">
                        <span>{credit.quote}</span>
                        {#if credit.links}
                            <section class="links">
                                {#each credit.links as link}
                                    <a href={link.url} target="_blank">
                                        <img class="icon" src={link.iconUrl} alt={link.name} />
                                        <span>{link.name}</span>
                                    </a>
                                {/each}
                            </section>
                        {/if}
                    </section>
                </section>
            </div>
        {/each}
    </div>
    
    <span class="extras">
        The GitHub Repository is right here! <br/>
        <a href="https://github.com/BaranMuzu/BaranMuzu-Website" target="_blank">
            GitHub Repository
        </a>
    </span>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        height: 83vh;
        
        .bigText {
            font-size: 2rem;
            color: var(--primary);
            text-align: center;
            font-weight: bold;
        }
        
        .parent {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            
            .content {
                background-color: var(--background);
                border: 3px solid var(--primary);
                border-radius: 10px;
                
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
                padding: 15px 15px;
                width: 100%;
                
                .profilePicture {
                    width: 128px;
                    height: 128px;
                }
                
                section {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    
                    .bigText {
                        font-size: 4rem;
                        color: #FFF;
                        text-align: left;
                        font-weight: bold;
                        transition: font-size 0.3s ease;
                    }
                    
                    .expand {
                        max-height: 0;
                        opacity: 0;
                        overflow: hidden;
                        transition: max-height 0.4s ease, opacity 0.3s ease, margin-top 0.3s ease;
                        
                        .links {
                            display: flex;
                            flex-direction: row;
                            gap: 8px;
                            
                            a {
                                display: flex;
                                align-items: center;
                                gap: 8px;
                                background: #111;
                                border: 1px solid #333;
                                padding: 8px 16px;
                                border-radius: 8px;
                                text-decoration: none;
                                color: #eee;
                                font-size: 0.95rem;
                                transition: all 0.2s ease;
                                width: fit-content;
                            } a:hover {
                                background: var(--primary);
                                color: #000;
                                border-color: #fff;
                            }
                        }
                            
                        .icon {
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
            
            .content:hover {
                .bigText {
                    font-size: 2.5rem;
                }
                
                .expand {
                    max-height: 1000px;
                    opacity: 1;
                    margin-top: 10px;
                    font-size: 1rem;
                }
            }
            
            @media screen and (max-width: 768px) {
                width: 100%;
                
                .content {
                    section {
                        .bigText {
                            font-size: 2.5rem;
                        }
                    }
                }
            }
        }
        
        .extras {
            margin-top: 20px;
            text-align: center;
            font-size: 0.9rem;
            margin-top: auto;
            
            a {
                color: var(--primary);
                text-decoration: none;
            }
        }
    }
</style>