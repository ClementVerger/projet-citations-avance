// src/public/script.js
async function chargerCitation() {
  try {
    const response = await fetch('/api/citation');   // 👉 appel vers TON serveur
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    document.getElementById('citation').innerText = data.citation;
  } catch (error) {
    console.error('Erreur lors du chargement de la citation :', error);
    document.getElementById('citation').innerText =
      'Erreur lors du chargement de la citation.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nouvelle');
  if (btn) {
    btn.addEventListener('click', chargerCitation);
  }

  // première citation au chargement
  chargerCitation();
});
