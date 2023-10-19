function removeSelectedItem() {
    const selectList = document.getElementById('myList');

    const selectedIndex = selectList.selectedIndex;

    if (selectedIndex !== -1) {
        selectList.remove(selectedIndex);
    } else {
        alert("Veuillez selectionner un element de la liste.")
    }
}