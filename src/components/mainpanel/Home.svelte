<script>
    import Age from '../misc/Age.svelte';
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
        <section>
            <span class="bigText">
                💻 I code in:
            </span> <br/>
            <img
                src="https://skillicons.dev/icons?i=haxe,lua,python,html,css&theme=dark"
                alt="Haxe, Lua, Python, HTML, CSS"
            />
        </section>
        
        <section>
            <span class="bigText">
                💻 Coding Languages I want to learn:
            </span> <br/>
            <img
                src="https://skillicons.dev/icons?i=cs,cpp,js&theme=dark"
                alt="C#, C++, JavaScript"
            />
        </section>
    </section>
    
    <section class="socials">
        <span class="bigText">🌐 Socials:</span> <br/>
        <span>Discord: baranmuzu</span>
        <section class="links">
            <section class="column">
                <a href="https://bsky.app/profile/baranmuzu.bsky.social">Bluesky</a>
                <a href="https://www.youtube.com/@BaranMuzu">Youtube</a>
                <a href="https://gamebanana.com/members/3018434">Gamebanana</a>
            </section>
            <section class="column">
                <a href="https://gamejolt.com/@BaranMuzu">Gamejolt</a>
                <a href="https://www.tiktok.com/@baranmuzu">Tiktok</a>
                <a href="https://baranmuzu.newgrounds.com/">Newgrounds</a>
            </section>
            <section class="column">
                <a href="https://github.com/BaranMuzu">GitHub</a>
                <a href="https://scratch.mit.edu/users/BaranMuzu/">Scratch</a>
                <a href="https://baranmuzu.itch.io/">Itch Io</a>
            </section>
            <section class="column">
                <a href="https://soundcloud.com/baranmuzu">Soundcloud</a>
            </section>
        </section>
    </section>
    
    <section class="stats">
        <span class="bigText">📈 Github Stats</span> <br/>
        <section class="statsContent">
            <img
                src="https://raw.githubusercontent.com/BaranMuzu/baranmuzu/f39fcdea8c8ffde24b02ec4e18afc1bc256ab361/profile/stats.svg"
                alt="Github Stats"
            />
            <img
                src="https://raw.githubusercontent.com/BaranMuzu/baranmuzu/f39fcdea8c8ffde24b02ec4e18afc1bc256ab361/profile/wakatime.svg"
                alt="Wakatime Stats"
            />
        </section>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
        .programmingLanguage {
            display: flex;
            gap: 2rem;
        }
        
        .socials {
            .links {
                display: flex;
                flex-direction: row;
                gap: 0.75rem;
                
                .column {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    
                    a {
                        padding: 0.5rem 0.75rem;
                        background-color: var(--secondary);
                        text-align: center;
                        min-width: 150px;
                        text-decoration: none;
                        color: var(--secondaryText);
                        border-radius: 0.25rem;
                        transition: all 150ms ease-in-out;
                    } a:hover {
                        background-color: var(--primary);
                        scale: 1.05;
                    }
                }
                
            }
        }
        
        .stats {
            .statsContent {
                display: flex;
                flex-direction: row;
                gap: 1rem;
                align-items: start;
            }
        }
    }
    
    .bigText {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>