import "dotenv/config";

const url = "https://api.github.com/repos/BaranMuzu/BaranMuzu-Website";
function getHeaders(useAuth = true) {
    const headers = {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "BaranMuzu-Website",
    };

    const githubToken = process.env.GITHUB_API;

    if (useAuth && githubToken) {
        headers.Authorization = `Bearer ${githubToken}`;
    }

    return headers;
}

async function getLatestCommit() {
    const headers = getHeaders();
    const response = await fetch(url + "/commits", { headers });
    const data = await response.json();

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }
    
    return {
        image: data[0].author.avatar_url,
        name: data[0].commit.author.name,
        message: data[0].commit.message,
        date: formatDate(data[0].commit.author.date),
        url: data[0].html_url,
    };
}
export { getLatestCommit };
