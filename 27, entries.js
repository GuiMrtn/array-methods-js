// la méthode entries() en JavaScript est utilisée pour créer un nouvel objet Array Iterator qui contient des paires clé/valeur pour chaque index dans un tableau. Cela permet d'itérer facilement sur les indices et les valeurs du tableau. La méthode retourne un objet Array Iterator, que l'on peut utiliser avec une boucle for...of ou d'autres méthodes d'itération pour accéder aux paires clé/valeur.

//Exemple 1
let fruits = ['pomme', 'banane', 'cerise'];

let iterator = fruits.entries();

for (let entry of iterator) {
    console.log(entry);
}
// Retourne
// [0, "pomme"]
// [1, "banane"]
// [2, "cerise"]

//Exemple 2 : utilisation avec forEach()
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});
// Retourne
// Index: 0, Fruit: pomme
// Index: 1, Fruit: banane
// Index: 2, Fruit: cerise

