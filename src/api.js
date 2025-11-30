// src/api.js
const fetch = require('node-fetch');

async function getCitation() {
  const response = await fetch('https://zenquotes.io/api/random');
  const data = await response.json();
  // data = [ { q: 'citation', a: 'auteur', ... } ]
  return `${data[0].q} - ${data[0].a}`;
}

// Export simple, comme dans le sujet
module.exports = getCitation;
