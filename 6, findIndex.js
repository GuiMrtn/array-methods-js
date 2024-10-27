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

//Méthode presque identique à la méthode find() à la différence qu'elle retourne l'index de l'élement au lieu de celui-ci. Si l'élément n'existe pas, la méthode retournera -1.
let achille = tabPersonnages.findIndex(element => {
    return element.nom === "Achille";
})

console.log(achille) // Retourne 3

let hermes = tabPersonnages.findIndex(element => {
    return element.nom === "Hermès";
})

console.log(hermes); //Retourne -1