const express = require('express');
const path = require('path');
const fetch = require('node-fetch'); // v2
const app = express();
const PORT = 3000;

// 1. Servir les fichiers statiques (front)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Route API backend → appelle ZenQuotes côté serveur
app.get('/api/citation', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    if (!response.ok) {
      return res.status(500).json({ error: 'Erreur API externe' });
    }

    const data = await response.json();
    const citation = `${data[0].q} - ${data[0].a}`;
    res.json({ citation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// 3. Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
