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

// 1. Création d'un nouveau tableau avec le nom des personnages
let persos = tabPersonnages.map(element => {
    return element.nom
})
console.log(persos) // retourne ["Zeus", "Hades", "Poséidon", "Achille", "Cyclope", "Titan", "Dragon noir", "Chevalier"]

let persos1 = tabPersonnages.map((element) => "Zeus")
console.log(persos1); // Affiche ['Zeus', 'Zeus', 'Zeus', 'Zeus', 'Zeus', 'Zeus', 'Zeus', 'Zeus']


// 2. Création d'un nouveau tableau avec le nouveau prix (avec une réduction de 30%)
let reduction = tabPersonnages.map(element => {
    return element.prix - 0.3 * element.prix;
});

//Retourne un tableau contenant le nouveau prix (avec une réduction de 30%).
console.log(reduction) // retourne [7000, 4800, 4500, 4150, 2700, 7200

