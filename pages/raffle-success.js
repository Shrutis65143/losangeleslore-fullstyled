import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ticketStore from '../lib/ticketStore';

export default function RaffleSuccess() {
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (userId) {
      ticketStore[userId] = (ticketStore[userId] || 0) + 1;
    }
  }, [userId]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 Payment Successful</h1>
      <p>Your raffle ticket has been added!</p>
    </div>
  );
}
