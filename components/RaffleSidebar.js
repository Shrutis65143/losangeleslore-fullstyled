import { useState, useEffect } from 'react';

export default function RaffleSidebar({ userId = 123 }) {
    const [open, setOpen] = useState(false);
    const [tickets, setTickets] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const toggleSidebar = () => setOpen(!open);

    const fetchTickets = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/raffle-status?userId=${userId}`);
            const data = await res.json();
            if (res.ok) {
                setTickets(data.tickets);
                setError('');
            } else {
                throw new Error(data.error || 'Failed to load tickets');
            }
        } catch {
            setError('❌ Error, try again.');
        } finally {
            setLoading(false);
        }
    };

    const joinRaffle = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/raffle-entry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId }),
            });
            const data = await res.json();
            if (res.ok) {
                setTickets(data.tickets);
                setError('');
            } else {
                throw new Error(data.error || 'Failed to join raffle');
            }
        } catch {
            setError('❌ Error, try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleFakePayment = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId }),
            });
            const data = await res.json();
            if (res.ok) {
                setTickets(data.tickets);
                setError('');
            } else {
                setError('❌ Payment failed. Please try again.');
            }
        } catch {
            setError('❌ Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (open) fetchTickets();
    }, [open]);

    return (
        <>
            {/* Floating Action Button (FAB) */}
            <button
                onClick={toggleSidebar}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    backgroundColor: '#E91E63',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '56px',
                    height: '56px',
                    fontSize: '1.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1000,
                }}
            >
                🎟️
            </button>

            {/* Slide-up Sidebar Panel */}
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: '#fff',
                        padding: '1.5rem',
                        borderTop: '3px solid #E91E63',
                        boxShadow: '0 -4px 8px rgba(0,0,0,0.1)',
                        zIndex: 999,
                    }}
                >
                    <div style={{ marginBottom: '1rem', fontSize: '1rem', color: '#333' }}>
                        {loading
                            ? 'Loading...'
                            : error
                                ? error
                                : `✅ You have ${tickets ?? 0} ticket${tickets === 1 ? '' : 's'}.`}
                    </div>
                    <button
                        onClick={joinRaffle}
                        disabled={loading}
                        style={{
                            backgroundColor: '#E91E63',
                            color: '#fff',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        {loading ? 'Joining...' : 'Join the Raffle'}
                    </button>

                    <button
                        onClick={handleFakePayment}
                        disabled={loading}
                        style={{
                            marginTop: '1rem',
                            marginLeft: '20px',
                            backgroundColor: '#006BA6',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        {loading ? 'Processing...' : '💳 Proceed to Payment'}
                    </button>
                </div>
            )}
        </>
    );
}
