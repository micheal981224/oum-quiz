require('dotenv').config();
const GROQ_API_KEY = process.env.GROQ_API_KEY;

// Debug: check if the key is loaded
console.log("Loaded key:", GROQ_API_KEY ? GROQ_API_KEY.slice(0,10) + "..." : "undefined");

const http = require('http');
const fs   = require('fs');
const path = require('path');
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css' : 'text/css',
  '.js'  : 'application/javascript',
};

http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // ── Proxy: browser -> this server -> Groq API 
  if (req.method === 'POST' && req.url === '/api/chat') {
    if (!GROQ_API_KEY || GROQ_API_KEY === 'YOUR_GROQ_KEY_HERE') {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'API key not set. Open server.js and paste your Groq key on line 16.' }));
      return;
    }

    let body = '';
    req.on('data', c => body += c);
    req.on('end', async () => {
      try {
        const { prompt } = JSON.parse(body);

        const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model:       'llama-3.3-70b-versatile',  // free, fast, high quality
            temperature: 0.7,
            max_tokens:  8000,
            messages: [
              { role: 'system', content: 'You are an expert exam question generator. Always respond with valid JSON only — no markdown, no backticks, no extra text.' },
              { role: 'user',   content: prompt }
            ],
          }),
        });

        const d = await r.json();

        if (!r.ok) {
          console.error('[ERR] Groq:', d?.error?.message || r.status);
          res.writeHead(r.status, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: d?.error?.message || 'Groq API error' }));
          return;
        }

        const text = d?.choices?.[0]?.message?.content || '';
        console.log('[OK]  Questions received from Groq');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ text }));

      } catch (e) {
        console.error('[ERR]', e.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // ── Static files ─────────────────────────────────────────
  const file = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  if (!file.startsWith(__dirname)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'text/plain' });
    res.end(data);
  });

}).listen(PORT, () => {
  console.log('');
  if (!GROQ_API_KEY || GROQ_API_KEY === 'YOUR_GROQ_KEY_HERE') {
    console.log('ACTION NEEDED:');
    console.log('Open server.js and paste your Groq API key on line 16.');
    console.log('Get a FREE key at: https://console.groq.com/keys');
    console.log('(No credit card required)');
  } else {
    console.log('OUM Quiz is running! (powered by FREE Groq API)');
    console.log(`Open:  http://localhost:${PORT}`);
  }
  console.log('');
});
