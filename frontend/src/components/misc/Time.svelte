<script>
    import { onMount } from "svelte";

    const baranTimeZone = "Europe/Istanbul";

    let baranTime = null;
    export let statusImage = "/assets/images/spin.gif";
    export let statusText = "Awake";
    
    export let isBirthday = false; 
    let timeUpdater = null;

    function setBaranDate() {
        const date = new Date(Date.now());
        const milisecondsElapsed = date.getUTCMilliseconds();

        const timeString = date.toLocaleString("en-US", { timeZone: baranTimeZone });
        const baranDate = new Date(timeString);
        
        const currentHour = baranDate.getHours();
        const currentMonth = baranDate.getMonth();
        const currentDay = baranDate.getDate();

        baranTime = date.toLocaleTimeString("tr-TR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: baranTimeZone
        });

        if (currentMonth === 3 && currentDay === 16) {
            isBirthday = true;
            statusImage = "/assets/images/birthday.png";
            statusText = "Birthday!";
        } else {
            isBirthday = false;
            if (currentHour >= 0 && currentHour < 7) {
                statusImage = "/assets/images/baransleep.png";
                statusText = "Sleeping";
            } else {
                statusImage = "/assets/images/spin.gif";
                statusText = "Awake";
            }
        }

        timeUpdater = setTimeout(function() {
            setBaranDate();
        }, 1000 - milisecondsElapsed);
    }

    onMount(function() {
        setBaranDate();

        return function() {
            if (timeUpdater != null) {
                clearTimeout(timeUpdater);
            }
        };
    });
</script>

<div class="main">
    {#if baranTime != null}
        <span>{baranTime}</span>
    {:else}
        <span>00:00:00</span>
    {/if}
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        text-align: center;
    }
</style>