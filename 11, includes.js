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

//Ici, on va vérifier si une note est présente dans le tableau notes
let notes = [1, 4, 5, 20];
let isPresent = notes.includes(15); 
console.log(isPresent); //Affiche : false
let isPresent1 = notes.includes(20); 
console.log(isPresent1); //Affiche : true