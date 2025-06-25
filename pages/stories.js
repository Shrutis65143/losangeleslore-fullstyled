import Head from 'next/head';
import RaffleSidebar from '../components/RaffleSidebar';


export default function StoriesPage() {
    return (
        <>
            <Head>
                <title>Los Angeles Lore – Discover the Untold Stories</title>
                <meta
                    name="description"
                    content="Explore powerful stories, poems, and street art from the heart of Los Angeles. Discover the city’s untold voices."
                />
            </Head>

            <div style={{
                fontFamily: 'Lora, sans-serif',
                padding: '3rem',
                background: '#f8f9fa',
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
                    <h1 style={{
                        color: '#006BA6',
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '2.5rem',
                        marginBottom: '1rem'
                    }}>
                        📚 Stories from Los Angeles
                    </h1>

                    <section style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
                        <p>
                            Step into the streets, memories, and minds of LA’s people. From hidden murals to whispered poetry, these stories show the city in a new light—raw, creative, and deeply personal.
                        </p>
                        <p>
                            Whether you're reading or contributing, this is a space for connection. Your voice matters here. Let the stories of Los Angeles inspire, challenge, and move you.
                        </p>
                    </section>
                </div>
            </div>
            <RaffleSidebar userId={123} />
        </>
    );
}
