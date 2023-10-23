// Cross-Site Scripting (XSS)
// mauvaise pratique

let userContent = location.hash.slice(1);
document.getElementById('output').innerHTML = userContent;
// insertion direct dans le Dom avec innerHTML()

// bonne pratique
document.getElementById('output').textContent = userContent;
//on s'assure que le contenu est traite comme du texte brut

// CSRF Cross-Site-Request-Forgery

function generateTokenCSRF() {
    token = randomStringGenerator();
    storeInUserSession(token);
    return token;
}

function verifyCSRFToken(receivedToken) {
    if (reveivedToken != actualToken) {
        rejectRequest();
    }
}

// Content Security Policy CSP Exemple 

// Autorise uniquement les ressources provenant du meme domaine que ce site.
// Content-Security-Policy: default-src 'self';

// Autorise uniquement certain domaine
// Content-Security-Policy: script-src 'self' cdn.example.com;

// Autorise l'insertion d'image de n'importe quel domaine
// Content-Security-Policy: img-src *;

// Desactiver l'evaluation de chaine de caracteres, pas recommandee
// Content-Security-policy: script-src 'self' 'unsafe-eval';



