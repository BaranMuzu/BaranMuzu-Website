<script>
    let status = "";
    let fileStatus = "Unselected";
    let username = "";
    let link = "";
    let selectedFile = null;
    let fileInput;

    const SERVER = import.meta.env.PUBLIC_SERVER;
    
    function openExpolorer() {
      fileInput.click();
    }

    function onFileSelected(e) {
      const file = e.target.files[0];
      if (file) {
        selectedFile = file;
        fileStatus = "Selected";
      } else {
        selectedFile = null;
        fileStatus = "Unselected";
      }
    }
    
    async function sendToServer() {
      if (!username) {
        status = "Please enter your username!";
        return;
      }
      if (!selectedFile) {
        status = "Please select a file!";
        return;
      }

      status = "Submitting...";

      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result.split(',')[1];
        const payload = {
          username,
          link,
          file: {
            name: selectedFile.name,
            type: selectedFile.type,
            data: base64
          }
        };

        try {
          const res = await fetch(`${SERVER}/api/discordwebhook`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (res.ok) {
            status = "Art submitted successfully!";
            username = "";
            link = "";
            selectedFile = null;
            fileStatus = "Unselected";
          } else {
            const err = await res.json();
            status = "Error: " + (err.error || "Unknown error");
          }
        } catch (e) {
          status = "Error: " + e.message;
        }
      };
      reader.onerror = () => {
        status = "Error reading file.";
      };
      reader.readAsDataURL(selectedFile);
    }
</script>

<main>
    <section class="flexRow">
        <input type="text" placeholder="Enter your username" bind:value={username} />
        <input type="text" placeholder="Enter your link (optional)" bind:value={link} />
    </section>
    
    <input type="file" style="display: none;" bind:this={fileInput} on:change={onFileSelected} accept="image/*" />
    <button on:click={openExpolorer} id="openFileButton">Open File ({fileStatus})</button>
    <button on:click={sendToServer} disabled={status === "Submitting..."}>Submit</button>

    {#if status}
        <p class="statusMessage">{status}</p>
    {/if}
    
    <span class="madeBy">made by <a href="https://codedave.pages.dev">daveberry</a>. wink wink ;3</span>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: var(--background);
        border: 3px solid var(--primary);
        border-radius: 15px;
        padding: 15px;
        
        input {
            padding: 0.5rem;
            border: 2px solid #333;
            border-radius: 5px;
            background-color: var(--background);
            color: var(--text);
            font-family: funkin;
        } input:focus {
            outline: none;
            border-color: var(--primary);
        } input:hover {
            border-color: var(--secondary);
        }
        
        button {
            padding: 0.5rem;
            border: 2px solid #333;
            border-radius: 5px;
            background-color: var(--background);
            color: var(--text);
            cursor: pointer;
            font-family: funkin;
        } button:hover {
            border: 2px solid var(--primary);
        } button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .statusMessage {
            font-family: funkin;
            color: var(--text);
            margin: 0;
            margin-top: 5px;
        }
        
        .madeBy {
            font-family: funkin;
            color: rgba(255, 255, 255, 0.2);
            font-size: 0.75rem;
            margin-top: 10px;
            
            a {
                color: rgba(255, 255, 255, 0.2);
                text-decoration: none;
            }
        }
    }
</style>
