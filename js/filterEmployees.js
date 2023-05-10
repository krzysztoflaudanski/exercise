//Napisz funkcję filterEmployees, która będzie pobierać dwa argumenty: tablicę z obiektami o strukturze { name: 'Imię nazwisko', salary: kwota-pensji }
//wartość minimalną zakresu, wartość maksymalną zakresu.
//Zadaniem naszej funkcji ma być zwrócenie nowej tablicy, która będzie posiadać tylko te osoby, których dochód jest większy niż wartość minimalna i mniejszy niż maksymalna.

const employees = [
  { name: 'Amanda Doe', salary: 3000 },
  { name: 'John Doe', salary: 4000 },
  { name: 'Claire Downson', salary: 2000 },
  { name: 'Freddie Clarkson', salary: 6000 },
  { name: 'Thomas Delaney', salary: 8200 }
];

function filterEmployees(arr, min, max) {
  const filteredArray = [];

  for(const empl of employees) {
    if(empl.salary > min && empl.salary < max) {
      filteredArray.push(empl);
    }
  }

  return filteredArray;
}

const filteredEmployees = filterEmployees(employees, 2000, 9000);
console.log(filteredEmployees);
