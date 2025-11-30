async function chargerCitation() {
    try {
        const response = await fetch('/api/citation');
        const data = await response.json();
        document.getElementById('citation').textContent = data.citation;
    }
    catch (error) {
        console.error('Erreur lors du chargement de la citation:', error);
        document.getElementById('citation').textContent = 'Erreur lors du chargement de la citation.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  if (!btn) return;

  // première citation au chargement
  chargerCitation();

  // nouvelle citation au clic
  btn.addEventListener('click', chargerCitation);
});