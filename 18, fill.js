//la méthode fill() est utilisée pour remplir tous les éléments d'un tableau avec une valeur statique. Cette méthode renvoie le tableau modifié. La syntaxe est celle-ci : array.fill(value, start, end).
//value : la valeur avec laquelle remplir le tableau. Cela peut être n'importe quel type de valeur (nombre, chaîne, objet...).
//start (optionnel) : l'indice à partir duquel commencer à remplir le tableau (par défaut 0).
//end (optionnel) : l'indice à laquelle arrêter le remplissage du tableau (non inclus). Si omis, il remplit jusqu'à la fin du tableau.

//1. Remplir un tableau entier
let array = new Array(5).fill(0);
console.log(array) // Retourne [0, 0, 0, 0, 0]

//2. Remplir une partie d'un tableau
let array1 = [1, 2, 3, 4, 5]
array1.fill(0, 1, 4)
console.log(array1) //retourne [1, 0, 0, 0, 5]

//3. Utiliser une valeur objet
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

const newTabPersonnages = tabPersonnages.fill({"nom": "Hermès", "puissance": 155, "prix": 5000}, 2, 4);
console.log(newTabPersonnages)
//Retourne
//     {"nom": "Zeus", "puissance": 300, "prix": 10000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Hermès", "puissance": 155, "prix": 5000},
//     {"nom": "Hermès", "puissance": 155, "prix": 5000},
//     {"nom": "Cyclope", "puissance": 100, "prix": 3000},
//     {"nom": "Titan", "puissance": 250, "prix": 8000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000}
