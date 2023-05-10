//Twoim zadaniem jest ustalenie i wyświetlenie w konsoli:
//sumy wszystkich pensji
//najwyższej pensji
//najniższej pensji

const salaries = [2000, 3000, 1500, 6000, 3000];

//Obliczenie sumy zapewne nie będzie dla Ciebie problemem, ale jak poradzić sobie z największą i najmniejszą wartością?

//Jak ustalić największą wartość? Najlepiej również wspomóc się pętlą. Jeśli stworzysz jakąś zmienną i nadasz jej wartość pierwszego elementu tablicy,
//to następnie wystarczy porównywać jej wartość do kolejnych sprawdzanych pensji. Jeśli kolejna pensja jest większa od tej, która aktualnie w tej zmiennej jest,
//to należy podmienić wartość zmiennej. Tym samym na końcu działania pętli, wartość która w tej zmiennej pozostanie, będzie można uznać za największą.
//Podobnie postąpimy przy szukaniu najmniejszej pensji.

let sum = 0;
let highestSalary = salaries[0];
let lowestSalary = salaries[0];

for(const salary of salaries) {
  sum += salary;
  if(salary > highestSalary) highestSalary = salary;
  if(salary < lowestSalary) lowestSalary = salary;
}

//console.log(sum, highestSalary, lowestSalary);
