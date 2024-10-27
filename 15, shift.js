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

//la méthode shift() supprime le premier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau

let deleteFirstPersonnage = tabPersonnages.shift();
console.log(deleteFirstPersonnage); //{"nom": "Zeus", "puissance": 300, "prix": 10000},

console.log(tabPersonnages)
//     {"nom": "Zeus", "puissance": 300, "prix": 10000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Achille", "puissance": 165, "prix": 4500},
//     {"nom": "Cyclope", "puissance": 100, "prix": 3000},
//     {"nom": "Titan", "puissance": 250, "prix": 8000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800}
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000}
//  length: 7