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

//Cette méthode ressemble à some() sauf qu'elle renverra true SI TOUS les éléments respectent une certaine condition
let ensembleFort = tabPersonnages.every(element => {
    return element.puissance > 100;
})

console.log(ensembleFort); // Affiche : false (au moins un personnage a une puissance inférieure à 100);



let ensembleFort1 = tabPersonnages.every(element => {
    return element.puissance > 10;
});

console.log(ensembleFort1); // Affiche : true (tous les personnages ont une puissance supérieure à 10);