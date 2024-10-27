// La méthode values() est utilisée pour créer un nouvel objet Array Iterator qui contient les valeurs des éléments d'un tableau. Cela permet d'itérer facilement sur les valeurs sans se soucier des indices.

//Exemple de base
let fruits = ['pomme', 'banane', 'cerise'];

let iterator = fruits.values();

for (let value of iterator) {
    console.log(value);
}
// Retourne :
// pomme
// banane
// cerise

//Exemple avec l'utilisation de forEach()
fruits.forEach((fruit) => {
    console.log(`Fruit: ${fruit}`);
});
// Retourne :
// Fruit: pomme
// Fruit: banane
// Fruit: cerise
