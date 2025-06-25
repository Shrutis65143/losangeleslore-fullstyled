// pages/api/submit.js
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // required for formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const form = formidable({ multiples: true, keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: 'Form parsing failed' });
    }

    // ✅ You can optionally save files or log them here
    console.log('Fields:', fields);
    console.log('Files:', files);

    return res.status(200).json({ message: 'Success' });
  });
}
