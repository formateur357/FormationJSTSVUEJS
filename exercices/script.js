// Colorer le paragraphe
const paragraphe = document.querySelector('p');
paragraphe.style.color = 'blue';

// Afficher une popup avec l'attribut href du lien

document.getElementById('showHref').addEventListener('click', function() {
    const link = paragraphe.querySelector('a');
    alert(link.getAttribute('href'));
});