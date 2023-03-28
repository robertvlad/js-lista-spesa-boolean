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

for (let i = 0; i < list.length; i++) {
    
    const li = document.createElement('li');
    li.innerText = list[i];  
    console.log(li);
    list_container.appendChild(li)
}