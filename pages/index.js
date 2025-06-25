import Head from 'next/head';
import Link from 'next/link';
import RaffleSidebar from '../components/RaffleSidebar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Los Angeles Lore – Discover the Untold Stories</title>
        <meta
          name="description"
          content="Discover poems, stories, and street art from Los Angeles artists. Submit your own creations and explore the voices of LA."
        />
      </Head>

      <div style={{
        fontFamily: 'Lora, sans-serif',
        padding: '3rem',
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '2rem'
        }}>
          <header style={{ borderBottom: '2px solid #006BA6', marginBottom: '2rem' }}>
            <h1 style={{
              color: '#006BA6',
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              marginBottom: '0.5rem'
            }}>
              Los Angeles Lore
            </h1>
            <p style={{ color: '#E63946', fontSize: '1.1rem' }}>
              Discover hidden stories, poems, and street art from LA.
            </p>
          </header>

          <main>
            <h2 style={{ fontFamily: 'Playfair Display', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              📍 Explore the Site:
            </h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '1.2rem', lineHeight: '2rem' }}>
              <li><Link href="/story-reader" style={{ color: '#006BA6' }}>📖 Story Reader</Link></li>
              <li><Link href="/submit" style={{ color: '#006BA6' }}>📤 Submit Your Story</Link></li>
              <li><Link href="/stories" style={{ color: '#006BA6' }}>📚 Stories</Link></li>
              <li><Link href="/awards" style={{ color: '#006BA6' }}>🏆 Awards Panel</Link></li>
              <li><Link href="/raffle" style={{ color: '#006BA6' }}>🎟️ Raffle Widget</Link></li>
              <li><Link href="/careduel" style={{ color: '#006BA6' }}>💖 CareDuel Banner</Link></li>
            </ul>

            {/* ✅ Placeholder paragraphs under main content */}
            <section style={{ marginTop: '2rem', lineHeight: '1.6' }}>
              <p>
                Los Angeles Lore is a tribute to the unheard voices of the city. Here, artists, writers, and creators come together to share stories shaped by culture, memory, and emotion. Each submission adds a new layer to LA’s rich and diverse identity.
              </p>
              <p>
                Whether you're expressing joy, grief, history, or hope—this platform is open to your creativity. Join our community of visionaries and help paint a fuller picture of what Los Angeles truly represents.
              </p>
            </section>
          </main>

          <footer style={{ marginTop: '3rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
            <p style={{ color: '#999' }}>© 2025 LosAngelesLore.com</p>
          </footer>
        </div>
      </div>
      <RaffleSidebar userId={123} />
    </>
  );
}
