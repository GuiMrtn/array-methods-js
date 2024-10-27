// la méthode flatMap() est utilisée pour aplatir un tableau d'un niveau tout en appliquant une fonction de transformation à chaque élément. Elle combine donc les fonctionnalités de map() et flat(), ce qui en fait un outil très puissant pour manipuler des tableaux. La syntaxe est celle-ci : array.flatMap(callback(currentValue, index, array), thisArg). Cette méthode retourne un nouveau tableau contenant les résultats de la fonction callback, aplani d'un niveau.

// callback : une fonction qui est appelée pour chaque élément du tableau. Elle prend 3 arguments :
// 1. currentValue : l'élément actuel du tableau en cours de traitement.
// 2. index (optionnel) : l'indice de l'élément actuel.
// 3. array (optionnel) : le tableau d'origine.

//thisArg (optionnel) : une valeur à utiliser comme this lors de l'exécution de callback.



// 1. Exemple de base
let numbers = [1, 2, 3];

let doubled = numbers.flatMap(num => [num * 2]);

console.log(doubled); // retourne [2, 4, 6]


// 2. Exemple avec des tableaux imbriqués. Imaginons que nous avons un tableau de tableaux et que nous voulons aplatir tout en transformant les éléments :
let nestedArray = [[1, 2], [3, 4], [5]];

let flattened = nestedArray.flatMap(arr => arr);

console.log(flattened); // [1, 2, 3, 4, 5]


// 3. Exemple combiné : Transformation et aplanissement. Tu peux également utiliser flatMap() pour effectuer des transformations plus complexes. Par exemple, transformons un tableau d'objetss. Dans cet exemple, pour chaque fruit, nous créons un tableau contenant le nom du fruit, répété selon sa quantité, puis nous aplanissons le tout.
let items = [
    { name: 'pomme', quantity: 2 },
    { name: 'banane', quantity: 3 },
    { name: 'cerise', quantity: 1 }
];

let result = items.flatMap(item => Array(item.quantity).fill(item.name));

console.log(result); // ['pomme', 'pomme', 'banane', 'banane', 'banane', 'cerise']


