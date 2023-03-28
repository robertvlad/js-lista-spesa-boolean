const list = [
    'Cioccolata',
    'Guanciale',
    'Pasta',
    'Pecorino',
    'Uova',
    'Aqcua',
    'Passata di pomodoro',
    'Piatti'
];

let list_container = document.querySelector('.shopping-list');

let i = 0;

while (i < list.length - 1) {

    let li = document.createElement('li');
    let item_list = list[i];
    li.innerText = item_list;
    list_container.appendChild(li);

    i++;
};