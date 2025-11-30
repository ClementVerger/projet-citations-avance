async function chargerCitation() {
  const bloc = document.getElementById('citation');

  try {
    const response = await fetch('/api/citation');
    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }
    const data = await response.json();   // { citation: "..." }
    bloc.innerText = data.citation;
  } catch (err) {
    console.error('Erreur lors du chargement de la citation :', err);
    bloc.innerText = "Impossible de charger la citation.";
  }
}

document.getElementById('nouvelle').addEventListener('click', chargerCitation);
window.addEventListener('load', chargerCitation);
