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

//On récupère les personnages ayant une puissance supérieure ou égale à 150
let puissants = tabPersonnages.filter(element => {
    return element.puissance >= 150
});

//Ici, on récupère les personnages ayant un prix inférieur ou égal à 150. On récupère un tableau d'objet
console.log(puissants) // retourne [{"nom": "Zeus", "puissance": 300, "prix": 10000},
                                // {"nom": "Titan", "puissance": 250, "prix": 8000},
                                // {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
                                // {"nom": "Chevalier", "puissance": 65, "prix": 1000}]