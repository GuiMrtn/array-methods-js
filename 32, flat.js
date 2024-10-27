// la méthode flat() est utilisée pour aplanir un tableau, c'est-à-dire qu'elle réduit la profondeur de la structure d'un tableau en une seule dimension, ou à un certain niveau de profondeur spécifié. Cette méthode est très utile pour manipuler des tableaux imbriqués. La syntaxe est celle-ci : array.flat(depth). L'argument depth est optionnel : c'est un entier qui indique jusqu'à quel niveau de profondeur le tableau doit être aplani. La valeur par défaut est 1. En mettant Infinity, le tableau sera aplani complètement, quel que soit le nombre de niveaux d'imbrication.



// Exemple 1 : aplanir le tableau à 1 niveau
let nestedArray = [1, 2, [3, 4, [5, 6]]];

let flattened = nestedArray.flat();

console.log(flattened); // retourne [1, 2, 3, 4, [5, 6]]



// Exemple 2 : aplanir un tableau à plusieurs niveaux
let nestedArray1 = [1, 2, [3, 4, [5, 6]]];

let flattened1 = nestedArray1.flat(2);

console.log(flattened1); // retourne [1, 2, 3, 4, 5, 6]



// Exemple 3 : aplanir complètement avec Infinity
let deeplyNestedArray = [1, [2, [3, [4, [5]]]]];

let flattenedInfinity = deeplyNestedArray.flat(Infinity);

console.log(flattenedInfinity); // retourne [1, 2, 3, 4, 5]


