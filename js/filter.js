//Twoim zadaniem jest napisanie funkcji o nazwie filter, która przyjmie dwa argumenty – dowolną tablicę oraz funkcję callback. Celem funkcji jest zwrócenie nowej przefiltrowanej tablicy,
//w której znajdą się tylko te elementy, dla których przekazana funkcja callback zwróci true.Pomysł jest bardzo ciekawy. Dzięki takiej funkcji,
//bylibyśmy w stanie bardzo szybko i łatwo dowolnie przefiltrowywać wybraną tablicę. Wystarczy podać dane wejściowe i warunek do sprawdzenia (schowany w funkcji callback),
//a ta zwróci nam nowe dane. Już przefiltrowane! Może brzmieć to dziwne, więc wspomożemy się małym przykładem.

//filter([5, 6, 7], function(item) { return item%2 === 0 });

//Przykładowo, odpalając filter jak wyżej, oczekiwalibyśmy, że jako wynik otrzymamy tablicę [6]. Dlaczego? Jak mówiliśmy już wcześniej, filter powinno przejść po wszystkich elementach,
//dla każdego odpalić funkcję callback (przekazując jako argument obsługiwany w danej chwili element) i zależnie od tego, czy jej wywołanie zwróci true albo false,
//decydować o pozostawieniu go w nowej przefiltrowanej tablicy. No więc pomyślmy. Najpierw filter będzie chciało sprawdzić pierwszy element tablicy, czyli 5.
//Uruchomi wiec funkcję callback function(item) { return item%2 === 0 }, przekazując jako pierwszy argument (item) właśnie wartość 5. Co taka funkcja zwróci? Dla 5 – false.
//Bo w końcu reszta z dzielenia 5 przez dwa na pewno będzie większa. Skoro więc funkcja callback zwróci nam false, to dany element nie będzie dodawany do nowej tablicy.
//Następnie filter zajmie się kolejnym elementem 6. Wykona ten sam algorytm. Uruchomi funkcję callback, przekazując jako item 6. Co tym razem zwróci ta funkcja? true. Tym razem więc weźmiemy ten element pod uwagę, przy konstrukcji nowej przefiltrowanej tablicy.
//Na końcu filter zajmie się 7. Tutaj znowu callback zwróci false, więc element nie będzie dodany do nowej przefiltrowanej tablicy.

//Jeśli nie masz pomysłu jak zacząć, to poniżej przedstawiamy nasz.

//Zacznij od utworzenia nowej pustej tablicy. To właśnie do niej będziemy zbierać za moment "pasujące" elementy.
//Przygotuj pętle for, która przejdzie po każdym elemencie tablicy przekazanej w formie argumentu.
//Wewnątrz tej pętli przygotuj kod, który uruchomi funkcję callback, przekazując jej jako argument aktualnie obsługiwany przez pętlę element. Następnie sprawdź, czy jej wywołanie zwróciło true czy false. Jeśli true, to dodaj ten element do naszej nowej tablicy. Do tej, którą utworzyliśmy w punkcie pierwszym.
//Po pętli dodaj instrukcję, która zadba o zwrócenie naszej przefiltrowanej tablicy.





function filter(arr, cb) {
  const filteredArray = [];

  for(const elem of arr) {
    if(cb(elem)%2 === 0) filteredArray.push(elem);
  }

  return filteredArray;
}


console.log(filter([5, 6, 7], function (item) { return item;}))

