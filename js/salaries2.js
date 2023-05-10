const persons = {
  john: 2000,
  amanda: 3000,
  thomas: 1500,
  james: 6000,
  claire: 3000
};

//Znowu Twoim zadaniem jest ustalenie i wyświetlenie w konsoli: sumy wszystkich pensji, najwyższej pensji ,najniższej pensji

/*let sum = 0;
let highestSalary = persons.john;
let lowestSalary = persons.john;

for(const personId in persons) {
  const personSalary = persons[personId];
  sum += personSalary;
  if(personSalary > highestSalary) highestSalary = personSalary;
  if(personSalary < lowestSalary) lowestSalary = personSalary;
}*/

//console.log(sum, highestSalary, lowestSalary);

// covert obj to array of its values ([2000, 3000, 1500...])
const salaries = Object.values(persons);
console.log(salaries);
let sum = 0;
let highestSalary = salaries[0];
console.log(highestSalary)
let lowestSalary = salaries[0];
console.log(lowestSalary)

for(const salary of salaries) {
  sum += salary;
  if(salary > highestSalary) highestSalary = salary;
  if(salary < lowestSalary) lowestSalary = salary;
}

console.log(sum, highestSalary, lowestSalary);
