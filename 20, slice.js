// La méthode slice() est utilisée pour créer une copie superficielle d'une portion d'un tableau ou d'une chaîne de caractères sans altérer le tableau ou la chaîne d'origine. La syntaxe est celle-ci : slice(start, end).
// start (optionnel) : l'index à partir duquel commence l'extraction. Si omis, cela commence à 0. Si négatif, il est traité comme un index à la fin du tableau.
// end (optionnel) : l'indice à laquelle arrêter l'extraction (non inclus). Si omis, cela va jusqu'à la fin du tableau. Si négatif, il est traité comme un index à partir de la fin du tableau.

// 1. Exemple avec un tableau
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 4)
console.log(newArray); // retourne [2, 3, 4]
console.log(array); // retourne [1, 2, 3, 4, 5]

// 2. Exemple avec des index négatif
let array1 = [1, 2, 3, 4, 5];
//Extrait les 3 derniers éléments
let newArray1 = array.slice(-3)
console.log(newArray1); // retourne [3, 4, 5]
console.log(array1); // retourne [1, 2, 3, 4, 5]

// 3. Exemple avec un tableau d'objet
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
let newTabPersonnages = tabPersonnages.slice(1, 4);
console.log(newTabPersonnages);
//retourne [
    // {"nom": "Hades", "puissance": 200, "prix": 6000},
    // {"nom": "Poséidon", "puissance": 175, "prix": 5000},
    // {"nom": "Achille", "puissance": 165, "prix": 4500}
//]

// 4. Exemple avec une chaîne de caractères
let string = "Hello World!";
let newString = string.slice(6, 12);
console.log(newString) // retourne World!