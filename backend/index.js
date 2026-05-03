import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
const app = express();
const port = 3000

app.use(cors());
app.use(express.json({ limit: '10mb' })); // Allow up to 10MB for art submissions

import * as discordwebhook from './api/discordwebhook.js';
import * as github from './api/github.js';

app.get('/', (req, res) => {
  res.redirect("https://baranmuzu.netlify.app/");
});

app.get('/api/github-latest-commit', async (req, res) => {
  try {
    const commit = await github.getLatestCommit();
    res.json(commit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/discordwebhook', (req, res) => {
  discordwebhook.POST(req)
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
})

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Baran's API server running locally at http://localhost:${port}`);
  });
}

export const handler = serverless(app);
