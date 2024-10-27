// La méthode reduceRight() fonctionne de manière similaire à reduce(), mais elle itère sur les éléments d'un tableau en commençant par la fin et en allant vers le début. Cela signifie que le dernier élément du tableau est traité en premier. La syntaxe est celle-ci : array.reduceRight(callback, initialValue).

// callback : une fonction qui est appelée pour chaque élément du tableau. Elle prend 4 arguments :
// 1. accumulator : La valeur accumulée retournée par le dernier appel de la fonction de rappel, ou la valeur initiale si spécifiée.
// 2. currentValue : L'élément actuel du tableau en cours de traitement.
// 3. currentIndex (optionnel) : L'indice de l'élément actuel.
// 4. array (optionnel) : Le tableau d'origine sur lequel reduceRight() est appelé.

// initialValue (optionnel) : Une valeur à utiliser comme premier argument de accumulator dans le premier appel de la fonction de rappel. Si elle est omise, le dernier élément du tableau est utilisé comme valeur initiale et currentValue commence à partir de l'avant-dernier élément.



//Exemple 1 : concaténation de chaîne de caractères
let words = ['Bonjour', 'tout', 'le', 'monde'];

let sentence = words.reduceRight((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
}, '');

console.log(sentence.trim()); // Retourne "monde le tout Bonjour"



//Exemple 2 : somme en partant de la fin
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduceRight((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 est la valeur initiale

console.log(sum); // Retourne 15


//Exemple 3 : Ici, on veut la somme de tous la puissance des personnages.
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

let puissance = tabPersonnages.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.puissance;
}, 0)

console.log(puissance); //Retourne 1475