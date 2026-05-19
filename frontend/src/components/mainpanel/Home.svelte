<script>
    import Age from '../misc/Age.svelte';
    import WakaStats from '../misc/WakaStats.svelte';

    // discord func
    let copied = $state(false);
    function copyDiscord() {
        navigator.clipboard.writeText('baranmuzu').then(() => {
            copied = true;
            setTimeout(() => {
                copied = false;
            }, 2000);
        });
    }

    // c-languages group
    const languagesGroup = [
        { name: "Programming Languages", items: [
            { name: "Lua", img: "lua" },
            { name: "Haxe", img: "haxe" },
            { name: "Python", img: "python" },
            { name: "HTML", img: "html" },
            { name: "CSS", img: "css" },
            { name: "JavaScript", img: "js" },
            { name: "C#", img: "cs" },
            { name: "Luau", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.sIS5Fju8Q_o-WuYl-1_BVQHaHa%3Fpid%3DApi&f=1&ipt=2814db9c682b1bd82ace6dbe6460e611c9e4f97c41396cb3c9040cb8c74d4c0b" }
        ]},

        { name: "Frontend", items: [
            { name: "Svelte", img: "svelte" },
            { name: "Astro", img: "astro" },
        ]}
    ]

    function isExternalIcon(icon) {
        if (!icon.includes("https")) return `https://skillicons.dev/icons?i=${icon}`;
        return icon;
    }
</script>

<main>
    <section class="intro">
        <span class="bigText">👋 Hey there!</span> <br/>
        <span>
            My name is Baran, I'm <Age /> years old, from Türkiye, and I'm a content creator on YouTube and other platforms.
            I'm also into coding, game development, and just vibing online.
        </span>
    </section>
    
    <section class="programmingLanguage">
        {#each languagesGroup as group}
            <div class="langGroup">
                <span class="bigText">{group.name}</span>
                <div class="langContainer">
                    {#each group.items as item}
                        <div class="langItem">
                            <img
                                src={isExternalIcon(item.img)}
                                alt={item.name}
                            />
                            <span>{item.name}</span>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </section>
    
    <section class="socials">
        <span class="bigText">🌐 Socials:</span>
        
        <button class="discordTag" onclick={copyDiscord} type="button">
            <img src="https://icons.duckduckgo.com/ip3/discord.com.ico" alt="Discord"/>
            <span>{copied ? 'Copied!' : 'Discord: baranmuzu'}</span>
        </button>

        <!-- TODO: Cleanup by using const group like `languagesGroup` -->
        <section class="mainLinks">
            <a href="https://www.youtube.com/@BaranMuzu" class="youtube">
                <img src="https://icons.duckduckgo.com/ip3/youtube.com.ico" alt=""/> Youtube
            </a>
            <a href="https://github.com/BaranMuzu" class="github">
                <img src="https://icons.duckduckgo.com/ip3/github.com.ico" alt=""/> GitHub
            </a>
            <a href="https://gamebanana.com/members/3018434" class="gamebanana">
                <img src="https://icons.duckduckgo.com/ip3/gamebanana.com.ico" alt=""/> Gamebanana
            </a>
            <a href="https://gamejolt.com/@BaranMuzu" class="gamejolt">
                <img src="https://icons.duckduckgo.com/ip3/gamejolt.com.ico" alt=""/> Gamejolt
            </a>
            <a href="https://x.com/BaranMuzu" class="x">
                <img src="https://icons.duckduckgo.com/ip3/x.com.ico" alt=""/> X
            </a>
        </section>

        <span class="subText">Socials that are less relevant</span>

        <section class="otherLinks">
            <a href="https://www.tiktok.com/@baranmuzu" class="tiktok">
                <img src="https://icons.duckduckgo.com/ip3/tiktok.com.ico" alt=""/> Tiktok
            </a>
            <a href="https://baranmuzu.newgrounds.com/" class="newgrounds">
                <img src="https://icons.duckduckgo.com/ip3/newgrounds.com.ico" alt=""/> Newgrounds
            </a>
            <a href="https://scratch.mit.edu/users/BaranMuzu/" class="scratch">
                <img src="https://icons.duckduckgo.com/ip3/scratch.mit.edu.ico" alt=""/> Scratch
            </a>
            <a href="https://baranmuzu.itch.io/" class="itchio">
                <img src="https://icons.duckduckgo.com/ip3/itch.io.ico" alt=""/> Itch Io
            </a>
            <a href="https://soundcloud.com/baranmuzu" class="soundcloud">
                <img src="https://icons.duckduckgo.com/ip3/soundcloud.com.ico" alt=""/> Soundcloud
            </a>
            <a href="https://bsky.app/profile/baranmuzu.bsky.social" class="bluesky">
                <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" alt=""/> Bluesky
            </a>
        </section>
    </section>

    <WakaStats />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        text-align: center;
        
        .programmingLanguage {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;

            .langGroup {
                display: flex;
                gap: 10px;
                flex-direction: column;
                
                .langContainer {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    width: 100%;
                    flex-wrap: wrap;
                    
                    .langItem {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        background-color: var(--sidebar);
                        border: 2px solid var(--sidebarRightBorder);
                        padding: 0.5rem 1rem;
                        border-radius: 15px;
        
                        img {
                            --size: 50px;
                            width: var(--size);
                            height: var(--size);
                            border-radius: 15px;
                        }

                        span {
                            font-size: 1.2rem;
                            color: var(--text);
                        }
                    }
                }
            }
        }
        
        .socials {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            .discordTag {
                display: flex;
                user-select: none; 
                align-items: center;
                gap: 0.5rem;
                background-color: var(--discord);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.25rem;
                font-weight: bold;
                border: none;
                font-family: inherit;
                font-size: inherit;    
                cursor: pointer;
                transition: transform 150ms ease-in-out;
                
                img {
                    width: 16px;
                    height: 16px;
                    background-color: #ffffff;
                    padding: 4px;
                    border-radius: 6px;
                    object-fit: contain;
                }
                &:hover {
                    transform: scale(1.05);
                    filter: brightness(1.1);
                }
            }
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                padding: 0.5rem 0.75rem;
                text-decoration: none;
                color: white;
                border-radius: 0.25rem;
                transition: all 150ms ease-in-out;
                font-weight: 600;
                min-width: 150px; 
                flex: 0 0 auto; 

                img {
                    width: 16px;
                    height: 16px;
                    background-color: #ffffff;
                    padding: 4px;
                    border-radius: 6px;
                    object-fit: contain;
                }
                &:hover {
                    scale: 1.05;
                    filter: brightness(1.1);
                }
            }

            .mainLinks, .otherLinks {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                gap: 0.75rem;
                max-width: 650px; 
            }

            .subText {
                font-size: 1rem;
                color: #cccccc;
                margin-top: 0.5rem;
                margin-bottom: -0.5rem;
            }

            .otherLinks {
                a { opacity: 0.7; }
                a:hover { opacity: 1; }
            }

            .bluesky { background-color: var(--bluesky); }
            .youtube { background-color: var(--youtube); }
            .gamebanana { background-color: var(--gamebanana); color: black; }
            .gamejolt { background-color: var(--gamejolt); }
            .tiktok { background-color: var(--tiktok); }
            .newgrounds { background-color: var(--newgrounds); color: black; }
            .x { background-color: var(--x); }
            .github { background-color: var(--github); }
            .scratch { background-color: var(--scratch); }
            .itchio { background-color: var(--itchio); }
            .soundcloud { background-color: var(--soundcloud); }
        }
        
        .stats {
            display: flex;
            flex-direction: column;
            align-items: center; 
            gap: 1rem;

            .statsContent {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }
    }
    
    .bigText {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>