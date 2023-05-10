//Napisz funkcję formatName, która przyjmie w argumencie imię i nazwisko, a następnie zwróci poprawioną jego formę.
//Poprawioną, czyli taką, w której tylko pierwsza litera imienia i nazwiska będą duże, a pozostałe małe.

//formatName('aMAnDa dOE'); // returns Amanda Doe
//formatName('AMANDA DOE'); // returns Amanda Doe
//formatName('john DOE'); // returns John Doe

//Bardzo pomocne mogą być wbudowane w JS funkcje:
//split – tę już znasz.
//charAt – zwraca informacje o znaku obecnym na danej pozycji w stringu.
//substr – pozwala na zwrócenie tylko części stringu (np. wszystkich liter z wyjątkiem pierwszej).
//toUpperCase – pozwala na zmianę liter na duże (np. aa do AA).
//toLowerCase – analogicznie jak wyżej, tylko w drugą stronę.
//Uwaga! Załóż, że bierzemy pod uwagę tylko proste tożsamości. Nie musisz obawiać się, że funkcja otrzyma tylko imię albo dwuczłonowe nazwisko.

function formatName (name) {
  const firstNameAndLastName = name.split(' ');
  let firstName = firstNameAndLastName[0];
  let lastName = firstNameAndLastName[1];

  firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase()
  lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase()

  return firstName + ' ' + lastName;
}

//formatName('john DOE'); // returns John Doe
console.log(formatName('JoHn DOE'));
