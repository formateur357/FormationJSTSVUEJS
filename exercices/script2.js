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

var container = document.getElementById("container");
container.innerHTML += "<p> hello </p>";
console.log(container.textContent);
console.log(container.innerHTML);

var parent = container.parentNode;
console.log(parent.nodeName);

var enfants = container.childNodes;
var enfants2 = container.children;
for(enfant of enfants)
    console.log(enfant)
for(enfant of enfants2)
    console.log(enfant);