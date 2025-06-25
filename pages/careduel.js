import Head from 'next/head';


export default function CareDuel() {
  return (
    <>

      <Head>
        <title>Los Angeles Lore – Discover the Untold Stories</title>
        <meta
          name="description"
          content="Take part in the CareDuel Challenge – share kind acts, inspire others, and celebrate compassion in Los Angeles communities."
        />
      </Head>


      <div style={{
        fontFamily: 'Lora, sans-serif',
        padding: '3rem',
        background: '#fce4ec',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          padding: '2rem'
        }}>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2rem',
            color: '#E63946',
            textAlign: 'center'
          }}>💖 CareDuel Challenge</h1>
          <p style={{ textAlign: 'center' }}>
            Share acts of kindness. Compete with care.
          </p>

          {/* ✅ Placeholder paragraphs */}
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#444'
          }}>
            <p>
              CareDuel invites Angelenos to outdo each other in the best way possible—by doing good.
              Whether it's helping a neighbor, donating to a cause, or spreading positivity online, every act adds up to a more connected LA.
              Challenge a friend and pass it on.
            </p>
            <p>
              Each week, top kindness entries are featured on our homepage and entered into a prize raffle.
              It's not about who wins—it’s about how much love we spread along the way. Kindness counts, and we count on you.
            </p>
          </div>

        </div>
      </div>

    </>
  );
}