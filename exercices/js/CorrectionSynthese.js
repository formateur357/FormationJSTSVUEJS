// data

let ventes = [
    { id: 10001, date: '2022-01-05', livre: { titre: 'L\'Odyssée', auteur: 'Homère', genre: 'Épopée', prix: 12.50 }, quantite: 5 },
    { id: 10002, date: '2022-01-15', livre: { titre: '1984', auteur: 'George Orwell', genre: 'Science-fiction', prix: 10.00 }, quantite: 2 },
    { id: 10003, date: '2022-01-18', livre: { titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', genre: 'Conte philosophique', prix: 8.00 }, quantite: 4 },
    { id: 10004, date: '2022-01-25', livre: { titre: 'L\'Odyssée', auteur: 'Homère', genre: 'Épopée', prix: 12.50 }, quantite: 3 },
    { id: 10005, date: '2022-02-02', livre: { titre: 'Dune', auteur: 'Frank Herbert', genre: 'Science-fiction', prix: 15.00 }, quantite: 6 },
    { id: 10006, date: '2022-02-05', livre: { titre: 'Bel-Ami', auteur: 'Maupassant', genre: 'Roman', prix: 9.50 }, quantite: 2 },
    { id: 10007, date: '2022-02-08', livre: { titre: 'Le Seigneur des Anneaux', auteur: 'J.R.R. Tolkien', genre: 'Fantasy', prix: 20.00 }, quantite: 7 },
    { id: 10008, date: '2022-02-10', livre: { titre: '1984', auteur: 'George Orwell', genre: 'Science-fiction', prix: 10.00 }, quantite: 5 },
    { id: 10009, date: '2022-02-12', livre: { titre: 'Le Meilleur des mondes', auteur: 'Aldous Huxley', genre: 'Science-fiction', prix: 11.00 }, quantite: 3 },
    { id: 10010, date: '2022-02-15', livre: { titre: 'L\'Étranger', auteur: 'Albert Camus', genre: 'Roman', prix: 8.50 }, quantite: 4 },
    { id: 10011, date: '2022-02-17', livre: { titre: 'La Métamorphose', auteur: 'Franz Kafka', genre: 'Nouvelle', prix: 7.50 }, quantite: 3 },
    { id: 10012, date: '2022-02-20', livre: { titre: 'Dune', auteur: 'Frank Herbert', genre: 'Science-fiction', prix: 15.00 }, quantite: 2 },
    { id: 10013, date: '2022-02-25', livre: { titre: 'Le Seigneur des Anneaux', auteur: 'J.R.R. Tolkien', genre: 'Fantasy', prix: 20.00 }, quantite: 5 },
    { id: 10014, date: '2022-03-02', livre: { titre: '1984', auteur: 'George Orwell', genre: 'Science-fiction', prix: 10.00 }, quantite: 6 },
    { id: 10015, date: '2022-03-05', livre: { titre: 'Bel-Ami', auteur: 'Maupassant', genre: 'Roman', prix: 9.50 }, quantite: 4 },
    { id: 10016, date: '2022-03-10', livre: { titre: 'L\'Odyssée', auteur: 'Homère', genre: 'Épopée', prix: 12.50 }, quantite: 3 },
    { id: 10017, date: '2022-03-12', livre: { titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', genre: 'Conte philosophique', prix: 8.00 }, quantite: 5 },
    { id: 10018, date: '2022-03-15', livre: { titre: 'La Peste', auteur: 'Albert Camus', genre: 'Roman', prix: 10.50 }, quantite: 3 },
    { id: 10019, date: '2022-03-20', livre: { titre: 'Dune', auteur: 'Frank Herbert', genre: 'Science-fiction', prix: 15.00 }, quantite: 1 },
    { id: 10020, date: '2022-03-23', livre: { titre: 'Le Meilleur des mondes', auteur: 'Aldous Huxley', genre: 'Science-fiction', prix: 11.00 }, quantite: 2 },
    { id: 10021, date: '2022-03-26', livre: { titre: 'Bel-Ami', auteur: 'Maupassant', genre: 'Roman', prix: 9.50 }, quantite: 6 },
    { id: 10022, date: '2022-03-28', livre: { titre: 'L\'Étranger', auteur: 'Albert Camus', genre: 'Roman', prix: 8.50 }, quantite: 4 },
    { id: 10023, date: '2022-03-30', livre: { titre: 'La Métamorphose', auteur: 'Franz Kafka', genre: 'Nouvelle', prix: 7.50 }, quantite: 2 },
    { id: 10024, date: '2022-04-01', livre: { titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', genre: 'Conte philosophique', prix: 8.00 }, quantite: 5 },
    { id: 10025, date: '2022-04-05', livre: { titre: '1984', auteur: 'George Orwell', genre: 'Science-fiction', prix: 10.00 }, quantite: 4 },
    { id: 10026, date: '2022-04-08', livre: { titre: 'L\'Odyssée', auteur: 'Homère', genre: 'Épopée', prix: 12.50 }, quantite: 6 },
    { id: 10027, date: '2022-04-12', livre: { titre: 'Le Seigneur des Anneaux', auteur: 'J.R.R. Tolkien', genre: 'Fantasy', prix: 20.00 }, quantite: 3 },
    { id: 10028, date: '2022-04-15', livre: { titre: 'La Peste', auteur: 'Albert Camus', genre: 'Roman', prix: 10.50 }, quantite: 2 },
    { id: 10029, date: '2022-04-20', livre: { titre: 'Bel-Ami', auteur: 'Maupassant', genre: 'Roman', prix: 9.50 }, quantite: 5 },
    { id: 10030, date: '2022-04-25', livre: { titre: 'Dune', auteur: 'Frank Herbert', genre: 'Science-fiction', prix: 15.00 }, quantite: 4 },
];

// Filtrage par période :
// Extrayez toutes les ventes du mois de février 2022.

// let ventesFevrier = ventes.filter(vente => vente.date >= '2022-02-01' && vente.date <= '2022-02-28');
// console.log(JSON.stringify(ventesFevrier));

// avec find

// let premiereVenteFevrier = ventes.find(vente => vente.date >= '2022-02-01' && vente.date <= '2022-02-28')
// console.log(premiereVenteFevrier);

//Statistiques de vente :
// Pour chaque livre (identifié par son titre), calculez le nombre total d'exemplaires vendus et les revenus totaux.

let statsLivres = ventes.reduce((acc, vente) => {
    if (!acc[vente.livre.titre]) {
        acc[vente.livre.titre] = {
            exemplairesVendus: 0,
            revenus: 0.0
        };
    }
    acc[vente.livre.titre].exemplairesVendus += vente.quantite;
    acc[vente.livre.titre].revenus += vente.livre.prix * vente.quantite;
    return acc;
}, {});

// console.log(JSON.stringify(statsLivres));

// to transform an object in list.
// console.log(JSON.stringify(Object.entries(statsLivres)));

// Top 5 des auteurs :
// Établissez le classement des 5 auteurs qui ont généré le plus de revenus.

let statsAuteurs = ventes.reduce((acc, vente) => {
    if (!acc[vente.livre.auteur]) {
        acc[vente.livre.auteur] = 0.0
    }
    acc[vente.livre.auteur] += vente.livre.prix * vente.quantite;
    return acc;
}, {});

// console.log(JSON.stringify(statsAuteurs));

let topAuteurs = Object.entries(statsAuteurs)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5)
                    .map(entry => ({ auteur: entry[0], revenu: entry[1] }));

// console.log(JSON.stringify(topAuteurs));

// Genres populaires :
// Identifiez le genre de livre le plus populaire en termes de quantité vendue.

let statsGenres = ventes.reduce((acc, vente) => {
    if (!acc[vente.livre.genre]) {
        acc[vente.livre.genre] = 0;
    }
    acc[vente.livre.genre] += vente.quantite;
    return acc;
}, {});

// console.log(JSON.stringify(statsGenres));

let genrePopulaire = Object.entries(statsGenres)
                        .sort((a, b) => b[1] - a[1])
                        .map(entry => ({ genre: entry[0], quantite: entry[1] }))[0];

// console.log(JSON.stringify(genrePopulaire));

// Remise :
// Pour chaque vente où plus de 4 exemplaires d'un livre ont été vendus, accordez une remise de 10% sur le prix total de cette vente. Mettez à jour le tableau de ventes en conséquence.

ventes = ventes.map(vente => {
    if (vente.quantite > 4) {

        vente.livre.prix *= 0.9;
        // vente.livre.prix = vente.livre.prix * 0.9;
    }
    return vente;
});

console.log(JSON.stringify(ventes));