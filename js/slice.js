
//Twoim zadaniem jest stworzenie nowej, w której będą zawarte tylko imiona żeńskie obecne w tej oryginalnej.
//Dla uproszczenia załóżmy, że imiona żeńskie to takie, które kończą się na "a".


const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
const filteredNames = [];

for(const name of names) {
  if(name.slice(-1) === 'a') {
    filteredNames.push(name);
  }
}
//console.log(filteredNames)
