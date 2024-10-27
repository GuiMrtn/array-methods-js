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

//la méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et retourne la nouvelle taille du tableau.

let pushPersonnages = [
    {"nom": "Hermès", "puissance": 250, "prix": 6500},
    {"nom": "Aphrodite", "puissance": 175, "prix": 5500}
];

for (let personnage of pushPersonnages) {
    tabPersonnages.unshift(personnage);
}

console.log(tabPersonnages);
//     {"nom": "Aphrodite", "puissance": 175, "prix": 5500},
//     {"nom": "Hermès", "puissance": 250, "prix": 6500},
//     {"nom": "Zeus", "puissance": 300, "prix": 10000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Achille", "puissance": 165, "prix": 4500},
//     {"nom": "Cyclope", "puissance": 100, "prix": 3000},
//     {"nom": "Titan", "puissance": 250, "prix": 8000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000}
//  length: 10