async function chargerCitation() {
  const bloc = document.getElementById('citation');

  // 1️⃣ D'abord tenter ton backend Express local
  try {
    const response = await fetch('/api/citation');

    // Si le backend répond 404 ou autre → on passe au catch
    if (!response.ok) {
      throw new Error('Backend non disponible');
    }

    const data = await response.json();        // { citation: "... - ..." }
    if (data && data.citation) {
      bloc.innerText = data.citation;
      return;  // ⬅️ FIN si ton backend fonctionne
    }

    throw new Error('Réponse inattendue du backend');
  }

  // 2️⃣ Si ton serveur Express n'est PAS disponible (ex: GitHub Pages)
  catch (err) {
    console.warn("Backend indisponible → fallback ZenQuotes", err);

    try {
      // Appel direct à ZenQuotes
      const response = await fetch('https://zenquotes.io/api/random');
      if (!response.ok) {
        throw new Error('ZenQuotes indisponible');
      }

      const data = await response.json();   // [ { q: "...", a: "..." } ]
      bloc.innerText = `${data[0].q} - ${data[0].a}`;
    } catch (err2) {
      // Double échec : backend + ZenQuotes
      console.error("Impossible de charger une citation :", err2);
      bloc.innerText = "Impossible de charger une citation.";
    }
  }
}

document.getElementById('nouvelle').addEventListener('click', chargerCitation);
window.addEventListener('load', chargerCitation);
