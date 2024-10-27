// la méthode keys() est utilisée pour créer un nouvel objet Array Iterator qui contient les clés (indices) des éléments d'un tableau. Cela permet d'itérer sur les indices d'un tableau facilement. La méthode retourne un objet Array Iterator qui contient les clés (indices) du tableau.

//Exemple 1
let fruits = ['pomme', 'banane', 'cerise'];

let iterator = fruits.keys();

for (let key of iterator) {
    console.log(key);
}
// Retourne :
// 0
// 1
// 2


//Exemple 2 : utilisation de forEach()
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});

// Retourne :
// Index: 0, Fruit: pomme
// Index: 1, Fruit: banane
// Index: 2, Fruit: cerise
