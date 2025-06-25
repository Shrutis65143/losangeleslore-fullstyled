// pages/api/create-checkout-session.js
import ticketStore from '../../lib/ticketStore';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { userId } = req.body;

  // Simulate success after delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Increase ticket count by 1
  const current = ticketStore[userId] || 0;
  ticketStore[userId] = current + 1;

  res.status(200).json({ message: 'Fake payment succeeded', tickets: ticketStore[userId] });
}
