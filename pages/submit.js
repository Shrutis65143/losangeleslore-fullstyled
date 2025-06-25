import { useState } from 'react';
import Head from 'next/head';

export default function Submit() {
  const [form, setForm] = useState({ name: '', email: '', story: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Enter a valid email';
    if (!form.story.trim()) errs.story = 'Story is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('story', form.story);
    files.forEach(file => {
      formData.append('media', file);
    });

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', story: '' });
        setFiles([]);
      } else {
        alert('❌ Submission failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Something went wrong. Try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Los Angeles Lore – Submit Your Story</title>
        <meta name="description" content="Submit stories, art, or poems to Los Angeles Lore—express your creativity and share your voice." />
      </Head>

      <div style={{ fontFamily: 'Lora, sans-serif', padding: '3rem', background: '#f9f9f9', minHeight: '100vh' }}>
        <div style={{
          maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff',
          borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '2rem'
        }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#006BA6', marginBottom: '1rem' }}>
            📤 Submit Your Story
          </h1>

          <form onSubmit={handleSubmit}>
            <label>Name: <span style={{ color: 'red' }}>*</span><br />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
              {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </label><br /><br />

            <label>Email: <span style={{ color: 'red' }}>*</span><br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
              {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </label><br /><br />

            <label>Story: <span style={{ color: 'red' }}>*</span><br />
              <textarea
                name="story"
                rows="5"
                value={form.story}
                onChange={handleChange}
                maxLength={1000}
                style={{ width: '100%', padding: '8px' }}
              />
              {errors.story && <div style={{ color: 'red' }}>{errors.story}</div>}
            </label><br /><br />

            <label>
              Upload Media (photos, videos, poems, songs, sculptures, drawings, street art):<br />
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
              />
            </label><br /><br />

            <button type="submit" style={{
              backgroundColor: '#006BA6', color: '#fff', border: 'none',
              padding: '10px 16px', borderRadius: '6px', cursor: 'pointer'
            }}>
              Submit
            </button>
          </form>

          {success && (
            <p style={{ color: 'green', marginTop: '1rem' }}>
              ✅ Thank you—your story is under review.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
