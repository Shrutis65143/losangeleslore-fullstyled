import Head from 'next/head';

export default function Awards() {
  return (
    <>

      <Head>
        <title>Los Angeles Lore – Discover the Untold Stories</title>
        <meta
          name="description"
          content="Celebrate creativity with our awards for LA's most inspiring stories, poems, and artworks shared by local artists."
        />
      </Head>

      <div style={{
        fontFamily: 'Lora, sans-serif',
        padding: '3rem',
        background: '#f1f5f9',
        minHeight: '100vh'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2.5rem',
            color: '#006BA6',
            marginBottom: '2rem'
          }}>🏆 Awards Panel</h1>

          {/* ✅ Placeholder paragraphs */}
          <section style={{ marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.1rem', color: '#444' }}>
            <p>
              Each year, Los Angeles Lore honors storytellers who leave a lasting impact on the city’s cultural canvas.
              These awards recognize voices that stir emotion, inspire reflection, and bring hidden truths into the light.
            </p>
            <p>
              From heartfelt poems to visionary artwork and personal narratives, our awards celebrate creators who give
              shape to LA’s diverse identity. Join us in honoring those who elevate everyday experiences into enduring stories.
            </p>
          </section>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem'
          }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '1rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: '#E63946', fontSize: '1.2rem' }}>Award Title {n}</h3>
                <p>Description of the award content goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}
