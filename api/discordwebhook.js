import 'dotenv/config';

export async function POST(req) {
  const { username, link, file } = req.body;
  const webhookUrl = process.env.DISCORD_WEBHOOK;

  if (!webhookUrl) throw new Error("DISCORD_WEBHOOK is not set in environment variables.");

  const formData = new FormData();
  
  const payload = {
    content: `# 🎨 New Art Submission!`,
    embeds: [{
      title: "Art Details",
      fields: [
        { name: "Artist", value: username || "Anonymous", inline: true },
        { name: "Link", value: link || "None", inline: true }
      ],
      image: file ? { url: `attachment://${file.name}` } : undefined,
      color: 0x5865F2,
      timestamp: new Date().toISOString()
    }]
  };

  formData.append('payload_json', JSON.stringify(payload));

  if (file && file.data) {
    const buffer = Buffer.from(file.data, 'base64');
    const blob = new Blob([buffer], { type: file.type || 'image/png' });
    formData.append('file[0]', blob, file.name);
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Discord API error: ${response.status} ${errorText}`);
  }

  return { success: true };
}

export async function GET(req) {
  return { message: "Discord Webhook API is working. Use POST to submit art." };
}
