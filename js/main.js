const listaSpesa = [
    'pane',
    'latte',
    'vino',
    'pesce',
    'carne',
    'mele'
];

const ul = document.getElementById('ulList');

let index = 0;

while (index < listaSpesa.length) {
    const newLiItem = document.createElement('li');
    ul.append(newLiItem);
    newLiItem.innerHTML = listaSpesa[index];
    index++;
}