import { handleChatRequest } from '../server/routes/chatHandler.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  return await handleChatRequest(req, res);
}
