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

//La méthode concat() est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.
let newPersonnage = [
    {"nom": "Hermès", "puissance": 200, "prix": 7000},
];

let addPersonnage = tabPersonnages.concat(newPersonnage);
console.log(addPersonnage);
//Retournera : addPersonnage = [
//     {"nom": "Zeus", "puissance": 300, "prix": 10000},
//     {"nom": "Hades", "puissance": 200, "prix": 6000},
//     {"nom": "Poséidon", "puissance": 175, "prix": 5000},
//     {"nom": "Achille", "puissance": 165, "prix": 4500},
//     {"nom": "Cyclope", "puissance": 100, "prix": 3000},
//     {"nom": "Titan", "puissance": 250, "prix": 8000},
//     {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
//     {"nom": "Chevalier", "puissance": 65, "prix": 1000},
//     {"nom": "Hermès", "puissance": 200, "prix": 7000}
// ];
