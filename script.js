const text = "Salut je m'appelle Rafik Bouchenna";
const textContent = document.getElementById("text-content");
const readMoreButton = document.getElementById("read-more-button");
const restOfPage = document.getElementById("rest-of-page");

let index = 0;

function afficherTexteSequentiel() {
  if (index < text.length) {
    textContent.innerHTML += text.charAt(index);
    index++;
    setTimeout(afficherTexteSequentiel, 50);
  } else {
    // Une fois que tout le texte a été affiché, affichez le bouton "Lire la suite".
    readMoreButton.style.display = "block";
  }
}

// Commencez l'affichage séquentiel du texte lorsque la page est prête.
window.addEventListener("load", afficherTexteSequentiel);

// Ajoutez un gestionnaire d'événements pour le bouton "Lire la suite".
let fleche = document.getElementsByClassName('arrow');
function linkSection(){
    console.log("quoicoubeh");
    location.href = "#section1";
}
fleche[0].addEventListener('click', linkSection);