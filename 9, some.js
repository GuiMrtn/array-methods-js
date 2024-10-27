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

//La méthode some retourne un boolean (true ou false)
//On va rechercher dans ce tableau si des prix sont supérieurs à 6000
let chers = tabPersonnages.some(element => {
    return element.prix > 6000;
})

console.log(chers); //Résultat : true (au moins un personnage a un prix supérieur à 6000)