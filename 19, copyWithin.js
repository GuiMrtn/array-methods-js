// La méthode copyWithin() est utilisée pour copier une partie d'un tableau dans une autre position au sein du même tableau, sans modifier sa longueur. La syntaxe est celle-ci : array.copyWithin(target, start, end).
// target : l'index où commence à copier les éléments dans le tableau. Si target est négatif, il est traité comme un index à partir de la fin du tableau.
// start (optionnel) : l'index à partir duquel commencer à copier les éléments. Si omis, il commence à 0. Si start est négatif, il est également traité comme un index à partir de la fin du tableau.
// end (optionnel) : l'index à partir duquel arrêter la copie du tableau (non inclus). Si omis, il copiera jusqu'à la fin du tableau. Si end est négatif, il est traîté de la même manière que start.

//Ex1 : avec un tableau simple
let array = [1, 2, 3, 4, 5];
// Copie les éléments de l'index 0 à 3 (1, 2, 3) et les place à l'index 3
array.copyWithin(3, 0, 3);
console.log(array); // retourne [1, 2, 3, 1, 2]


//Ex2 : avec un tableau d'objets.
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
tabPersonnages.copyWithin(3, 0, 3);
console.log(tabPersonnages);
// retourne [
//     {"nom": "Zeus", "puissance": 300, "prix": 10000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Zeus", "puissance": 300, "prix": 10000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000}
// ];