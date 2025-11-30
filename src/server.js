// src/server.js
const express = require('express');
const path = require('path');
const getCitation = require('./api'); // ⚠️ on réutilise ton module

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Servir les fichiers statiques (front)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Route API backend → appelle ZenQuotes via getCitation()
app.get('/api/citation', async (req, res) => {
  try {
    const citation = await getCitation();      // string "texte - auteur"
    res.json({ citation });                    // on renvoie du JSON propre
  } catch (err) {
    console.error('Erreur /api/citation :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// 3. Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
