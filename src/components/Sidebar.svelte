<script>
    import Time from "./misc/Time.svelte";
    export let currentPath = "/";
    let statusImage = "/assets/images/spin.gif";
    let statusText = "Awake";

    // SIDEBAR NAVIGATION CODE
    class SidebarLink {
        constructor(label, href) {
            this.label = label;
            this.href = href;
        }
    }

    let links = [
        new SidebarLink("Home", "/"),
        new SidebarLink("Fan Arts", "/fanarts"),
        new SidebarLink("Credits", "/credits"),
        new SidebarLink("Projects", "/projects")
    ];

    function checkActiveLink(href) {
        if (currentPath == href) {
            return true;
        } else {
            return false;
        }
    }
</script>

<div class="main">
    <div class="top">
        <img
            src={statusImage}
            width="128"
            height="128"
            alt={statusText}
        />
        <span class="mainText">I'm Baran!</span>
        <div class="localTime">
            <span>Local Time:</span>
            <Time bind:statusImage bind:statusText />
        </div>
        <span>Welcome to my page, looks like you want to learn more about me. So here we go!</span>
    </div>

    <div class="bottom">
        {#each links as link}
            <a class:active={checkActiveLink(link.href)} href={link.href}>{link.label}</a>
        {/each}
    </div>
    
    <div class="mobileHint">
        <span>Hey! Drag to left to fill your screen to the main panel!</span>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        min-width: 15rem;
        max-width: 15rem;
        height: 100vh;
        padding: 10px;

        border-right: 2px solid var(--sidebarRightBorder);
        background-color: var(--sidebar);

        .top {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            .localTime {
                display: flex;
                align-items: center;
                gap: 2px;
            }

            .mainText {
                color: var(--primary);
                font-size: 1.5rem;
                font-weight: bold;
            }
        }

        .bottom {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-top: 5rem;

            a {
                background-color: var(--secondary);
                color: var(--secondaryText);

                font-weight: bold;
                text-decoration: none;

                padding: 0.5rem 1rem;
                width: 10rem;
                border-radius: 5px;
                transition: scale 150ms ease-in-out;
            } a.active {
                background-color: var(--primary);
                border-color: var(--border);
            } a:hover {
                scale: 1.05;
            }
        }
        
        .mobileHint {
            display: none;
            margin-top: 15rem;
            color: var(--text);
        } @media screen and (max-width: 768px) {
            .mobileHint {
                display: block;
            }
        }
    }
</style>
