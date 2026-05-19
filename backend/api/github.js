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

    const final = data.slice(0, 6).map(item => ({
        image: item.author.avatar_url,
        name: item.commit.author.name,
        message: item.commit.message,
        date: formatDate(item.commit.author.date),
        url: item.html_url,
    }))
    
    return final;
}
export { getLatestCommit };
