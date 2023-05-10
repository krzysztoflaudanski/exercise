const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

//Twoim zdaniem jest zbudowanie na podstawie powyższej tablicy, obiektu uniqueTags, który posiada tylko unikalne tagi. W taki sposób, że każdy unikalny tag,
//to nowa właściwość w tym obiekcie. Jego wartością powinien być za to kolejny obiekt z właściwością appearances o wartości liczby wystąpień tego tagu.
//Czyli, dla naszych tagów wyżej, powinno wygenerować się coś w stylu:
//{ news: { appearances: 3 },
 // code: { appearances: 2 },
  //sport: { appearances: 1 },
  //hot: { appearances: 1 },}

  const uniqueTags = {};

  for(const tag of tags) {
    if(!uniqueTags[tag]) uniqueTags[tag] = { appearances: 1 };
    else uniqueTags[tag].appearances++;
   console.log(tag)

  }

console.log(uniqueTags)
