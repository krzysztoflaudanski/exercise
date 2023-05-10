const employees = {
  john: {
    name: 'John Doe',
    salary: 3000
  },
  amanda: {
    name: 'Amanda Doe',
    salary: 4000
  },
}

//To już trochę trudniejsze zadanie. Za pomocą pętli for przejdź po każdym obiekcie w employees i wygeneruj dwie nowe tablice.
//employeesNames powinno być listą imion pracowników (tylko imion!). employeesSalaries powinno być listą pensji.
//Uwaga! Bardzo przydatna może okazać się znana Ci już metoda split.

const employeesNames = [];
const employeesSalaries = [];

for(const employeeId in employees) {
  const employee = employees[employeeId];
 // console.log(employees);
  //console.log(employeeId);
  //console.log(employees[employeeId]);

  // split name at ' ' and get first element
  // (John Doe -> ['John', 'Doe'] -> 'John')
  const name = employee.name.split(' ')[0];
  employeesNames.push(name);
  employeesSalaries.push(employee.salary);
}
