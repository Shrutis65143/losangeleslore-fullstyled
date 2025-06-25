import ticketStore from '../../lib/ticketStore'; // ✅ use shared store

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'Missing userId' });
    }

    ticketStore[userId] = (ticketStore[userId] || 0) + 1;

    res.status(200).json({ tickets: ticketStore[userId] });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
