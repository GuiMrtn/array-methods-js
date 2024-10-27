// la méthode from() est utilisée pour créer un nouveau tableau à partir d'un objet semblable à un tableau ou d'un objet itérable. Cette méthode est très utile pour convertir des objets qui ne sont pas des tableaux en tableaux. La syntaxe est celle-ci : Array.from(arrayLike, mapFunction, thisArg).
// arrayLike : un objet semblable à un tableau (comme un tableau, une chaîne de caractères) qu'on souhaite convertir en tableau.
// mapFunction (optionnel) : une fonction à appliquer à chaque élément du tableau créé.
// thisArg (optionnel) : une valeur à exécuter comme this lors de l'exécution de mapFunction.

//Exemple 1 : conversion d'une chaîne en tableau
let str = "Hello";
let arr = Array.from(str);
console.log(arr) // retourne ["H", "e", "l", "l", "o"]


// Exemple 2 : conversion d'un ensemble en tableau
let set = new Set([1, 2, 3, 4])
let arr1 = Array.from(set)
console.log(arr1) // Retourne [1, 2, 3, 4]


// Exemple 3 : utilisation de mapFunction
let arr2 = Array.from([1, 2, 3, 4], x => x * 2);
console.log(arr2) // retourne [2, 4, 6, 8];


// Exemple 4 : utilisation avec thisArg
class Multiplier {
    constructor(factor) {
        this.factor = factor;
    }

    multiply(x) {
        return x * this.factor;
    }
}

let multiplier = new Multiplier(3);
let arr3 = Array.from([1, 2, 3], multiplier.multiply, multiplier);

console.log(arr3); // Retourne [3, 6, 9]
