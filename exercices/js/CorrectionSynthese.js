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