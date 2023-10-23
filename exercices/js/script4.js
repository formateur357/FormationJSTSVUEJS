function createTable() {
    const rows = window.prompt("Entrez le nombre de lignes:");
    const cols = window.prompt("Entrez le nombre de colonnes:");


    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Veuillez saisir des nombres valides!");
        return ;
    }

    const table = document.createElement('table');
    table.border = '1';

    for (let i = 0; i < rows; i++) {
        const tr = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const td = tr.insertCell();
            td.innerHTML = `Lignes${i + 1} Cellule${j + 1}`;
        }
    }

    const container = document.getElementById('tableContainer');
    container.innerHTML = '';
    container.appendChild(table);
}