// la méthode sort() est utilisée pour trier les éléments d'un tableau. Elle modifie le tableau d'origine et retourne le tableau trié. Par défaut, cette méthode trie les éléments comme des chaînes de caractères en fonction de l'ordre Unicode. Sa syntaxe est celle-ci : array.sort(compareFunction).
// compareFunction (optionnel) : une fonction qui définit l'odre de tri. Si ce paramètre est omis, les éléments sont triés en convertissant chacun d'eux en une chaîne et en les comparant par ordre lexicographique.

// Tri numérique. Nous sommes obligé de mettre une fonction de comparaison pour éviter que ces nombres soient convertis en string
let array = [4, 2, 22, 1, 3];
array.sort((a, b) => a - b);
console.log(array); // Retourne [1, 2, 3, 4, 22];

array.sort()
console.log(array) // Retourne [1, 2, 22, 3, 4] car converti en chaîne de caractères.

let array1 = [4, 2, 5, 1, 3];
array1.sort((a, b) => b - a);
console.log(array1) // Retourne [5, 4, 3, 2, 1];

//Tri sur les chaînes de caractères. La fonction de comparaison ne fonctionnera pas ici car nous avons déjà des chaînes de caractères.
let fruits = ["banane", "cerise", "pomme", "orange", "fraise"];
fruits.sort();
console.log(fruits) // retourne ["banane", "cerise", "fraise", "orange", "pomme"]



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

tabPersonnages.sort((a, b) => a.puissance - b.puissance);
console.log(tabPersonnages); // retourne
// [
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000},
//     {"nom": "Cyclope", "puissance": 100, "prix": 3000},
//     {"nom": "Achille", "puissance": 165, "prix": 4500},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
//     {"nom": "Titan", "puissance": 250, "prix": 8000},
//     {"nom": "Zeus", "puissance": 300, "prix": 10000}    
// ];

tabPersonnages.sort((a, b) => {
    if (a.nom < b.nom) return -1; // a vient avant b
    if (a.nom > b.nom) return 1;  // a vient après b
    return 0;                      // a et b sont égaux
});
console.log(tabPersonnages); // retourne
// [
//     {"nom": "Achille", "puissance": 165, "prix": 4500},
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000},
//     {"nom": "Cyclope", "puissance": 100, "prix": 3000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Titan", "puissance": 250, "prix": 8000},
//     {"nom": "Zeus", "puissance": 300, "prix": 10000}
// ];
