// La méthode reverse() est utilisée pour inverser l'ordre des éléments d'un tableau. Cette méthode modifie le tableau d'origine et retourne le tableau inversé.

let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // retourne [5, 4, 3, 2, 1];



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

tabPersonnages.reverse()
console.log(tabPersonnages); // retourne
// [
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
//     {"nom": "Titan", "puissance": 250, "prix": 8000},
//     {"nom": "Cyclope", "puissance": 100, "prix": 3000},
//     {"nom": "Achille", "puissance": 165, "prix": 4500},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Zeus", "puissance": 300, "prix": 10000}
// ];