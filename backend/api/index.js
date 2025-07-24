export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // or specific domain
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Preflight support
  }

  res.status(200).json({ message: 'Hello from backend!' });
}
