//Napisz funkcję forEach, która przyjmie dwa argumenty: dowolną tablicę, dowolną funkcję callback.
//Zadaniem funkcji powinna być przejście po każdym elemencie tablicy i wywołanie dla każdego z osobna funkcji callback. Tej, którą otrzymamy w drugim parametrze.
//Co ważne, ta funkcja callback powinna być wywołana z jednym argumentem, równym właśnie obsługiwanemu w danej chwili elementowi.
//Możesz wspomóc się powrotem do pierwszego modułu z projektem pizzerii. Tam bardzo dużo czasu spędziliśmy nad omawianiem wykorzystania funkcji callback.
//Przykłady tam dostępne mogą Ci dużo rozjaśnić.

//Np. takie wywołanie:
forEach(['John', 'Amanda', 'Thomas'], function(item) { console.log(item); });

//powinno dać nam w konsoli następujący rezultat:
//John
//Amanda
//Thomas

function forEach(arr, cb) {
  for(const elem of arr) {
    cb(elem);
  }
}
