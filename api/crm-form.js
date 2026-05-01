const CRM_FORM_ID = '65e86ef8-8fac-4075-8dc8-cf18b1fd5f2c';
const CRM_API_URL = `https://crm.tennet.kz/api/public/forms/${CRM_FORM_ID}/`;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Proxy GET request to fetch form config
    try {
      const response = await fetch(CRM_API_URL);
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch form config' });
      }
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching form config:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'POST') {
    // Proxy POST request to submit form data
    try {
      const response = await fetch(CRM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json(data);
      }

      return res.status(200).json(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
