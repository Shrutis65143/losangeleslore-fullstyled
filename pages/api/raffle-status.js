import ticketStore from '../../lib/ticketStore'; // ✅ use shared store

export default function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  const ticketCount = ticketStore[userId] || 0;
  res.status(200).json({ tickets: ticketCount });
}
