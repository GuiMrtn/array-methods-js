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

//la méthode toString() renvoie une chaîne de caractères contenant les éléments du tableau, séparés par une virgule.


console.log(tabPersonnages.toString()) // retourne [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

let array = [1, 2, "Zeus", "Hermès", true];
console.log(array.toString()) // retourne "1,2,Zeus,Hermès,true"