//Przygotuj funkcję getEvensInRange, która przyjmie dwa argumenty:
//liczbę wskazującą początek zakresu do sprawdzenia,
//liczbę wskazującą jego koniec.

//Zadaniem funkcji jest przejście po wszystkich liczbach wewnątrz podanego zakresu i zwrócenie tablicy, która będzie zawierać tylko te, które są parzyste.
//Do wykonania zadania pomocne będzie przypomnienie sobie składni podstawowej pętli for oraz dzielenia modulo.

/*function getEvensInRange(numberOne, numberTwo) {
  let score = [];

  for (let i = numberOne; i <= numberTwo; i++) {
    if (i % 2 == 0)
    score = score + i + ' ';
  }

return score;
}*/

console.log(getEvensInRange(-3, 9));



function getEvensInRange(start, end) {
  const evensArray = [];

  for(let i = start; i <= end; i++) {
    if(i%2 === 0) evensArray.push(i);
  }

  return evensArray;
}
