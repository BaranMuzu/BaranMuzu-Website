<script>
    const baranBirthday = Date.UTC(2010, 3, 16);

    let baranAge = null;
    let baranBirthDate = null;

    function setBaranAge() {
        const birthDateObj = new Date(baranBirthday);
        const timeSinceDate = new Date();

        baranBirthDate = birthDateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC"
        });

        timeSinceDate.setTime(Date.now() - birthDateObj.getTime());
        baranAge = timeSinceDate.getUTCFullYear() - 1970;
    }

    setBaranAge();
</script>

{#if baranAge != null}
    <span>{baranAge}</span>
{:else}
    <span>???</span>
{/if}
