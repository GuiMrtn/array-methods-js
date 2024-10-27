// La méthode reduce() est utilisée pour réduire un tableau à une seule valeur en appliquant une fonction de rappel sur chaque élément, en accumulant le résultat. C'est un outil très puissant pour effectuer des calculs ou transformations sur des tableaux. La syntaxe est celle-ci : array.reduce(callback, initialValue).

// callback : une fonction qui est appelée pour chaque élément du tableau. Elle prend 4 arguments : 
// 1. accumulator : La valeur accumulée retournée par le dernier appel de la fonction de rappel, ou la valeur initiale si spécifiée.
// 2. currentValue : L'élément actuel du tableau en cours de traitement.
// 3. currentIndex (optionnel) : L'indice de l'élément actuel.
// 4. array (optionnel) : Le tableau d'origine sur lequel reduce() est appelé.

//initialValue (optionnel) : Une valeur à utiliser comme premier argument de accumulator dans le premier appel de la fonction de rappel. Si elle est omise, le premier élément du tableau est utilisé comme valeur initiale et currentValue commence à partir du deuxième élément.



//Exemple 1 : on calcule la somme des éléments d'un tableau
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 est la valeur initiale

console.log(sum); // Retourne 15



//Exemple 2 : on multiplie les éléments d'un tableau
let numbers1 = [1, 2, 3, 4, 5];

let product = numbers1.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1); // 1 est la valeur initiale

console.log(product); // 120



//Exemple 3 : Ici, on veut la somme de tous les prix des personnages.
//Il y a deux arguments : l'accumulator est la somme des éléments parcourus et currentValue est l'élément qui est en train d'être parcouru. Enfin, 0 est la valeur de départ de l'accumulator
let tabPersonnages = [
    {"nom": "Zeus", "puissance": 300, "prix": 10000},
    {"nom": "Hades", "puissance": 200, "prix": 6000},
    {"nom": "Poséidon", "puissance": 175, "prix": 5000},
    {"nom": "Achille", "puissance": 165, "prix": 4500},
    {"nom": "Cyclope", "puissance": 100, "prix": 3000},
    {"nom": "Titan", "puissance": 250, "prix": 8000},
    {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
    {"nom": "Chevalier", "puissance": 65, "prix": 1000}
];

let price = tabPersonnages.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.prix;
}, 0)

console.log(price); //Résultat : 44300