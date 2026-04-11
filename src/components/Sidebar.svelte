<script>
    export let currentPath = "/";

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
            src="/assets/images/spin.gif"
            width="128"
            height="128"
            alt="baran spin!!"
        />
        <span class="mainText">I'm Baran!</span>
        <span>Welcome to my page, looks like you want to learn more about me. So here we go!</span>
    </div>

    <div class="bottom">
        {#each links as link}
            <a class:active={checkActiveLink(link.href)} href={link.href}>{link.label}</a>
        {/each}
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;

        min-width: 15rem;
        max-width: 15rem;
        height: 100vh;
        padding: 10px;

        border-right: 2px solid var(--sidebarRightBorder);

        .top {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

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
                text-align: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                width: 10rem;
                border-radius: 5px;
            } a.active {
                background-color: var(--primary);
                border-color: var(--border);
            }
        }
    }
</style>
