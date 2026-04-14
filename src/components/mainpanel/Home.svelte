<script>
    import Age from '../misc/Age.svelte';

    let copied = $state(false);

    function copyDiscord() {
        navigator.clipboard.writeText('baranmuzu').then(() => {
            copied = true;
            setTimeout(() => {
                copied = false;
            }, 2000);
        });
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
        <section class="langGroup">
            <span class="bigText">💻 I code in:</span>
            <img src="https://skillicons.dev/icons?i=haxe,lua,python,html,css&theme=dark" alt="Haxe, Lua, Python, HTML, CSS" />
        </section>
        
        <section class="langGroup">
            <span class="bigText">💻 Coding Languages I am trying to learn:</span>
            <img src="https://skillicons.dev/icons?i=cs,cpp,js&theme=dark" alt="C#, C++, JavaScript" />
        </section>
    </section>
    
    <section class="socials">
        <span class="bigText">🌐 Socials:</span>
        
        <button class="discordTag" onclick={copyDiscord} type="button">
            <img src="https://icons.duckduckgo.com/ip3/discord.com.ico" alt="Discord"/>
            <span>{copied ? 'Copied!' : 'Discord: baranmuzu'}</span>
        </button>

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
    
    <section class="stats">
        <span class="bigText">📈 Github Stats</span>
        <section class="statsContent">
            <img src="https://raw.githubusercontent.com/BaranMuzu/baranmuzu/f39fcdea8c8ffde24b02ec4e18afc1bc256ab361/profile/stats.svg" alt="Github Stats" />
            <img src="https://raw.githubusercontent.com/BaranMuzu/baranmuzu/f39fcdea8c8ffde24b02ec4e18afc1bc256ab361/profile/wakatime.svg" alt="Wakatime Stats" />
        </section>
    </section>
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
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;

            .langGroup {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem; 
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
            }

            .discordTag:hover {
                transform: scale(1.05);
                filter: brightness(1.1);
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
            }

            a:hover {
                scale: 1.05;
                filter: brightness(1.1);
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