document.getElementById('addLine').addEventListener('click', () => {
    const table = document.getElementById('myTable');

    // Creer une nouvwlle ligne a la fin du tableau
    const newRow = table.insertRow(-1);

    // Ajouter deux cellules a la nouvelle ligne
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.innerHTML = `Ligne${table.rows.length} cellule 1`;
    cell2.innerHTML = `Ligne${table.rows.length} cellule 2`;

})