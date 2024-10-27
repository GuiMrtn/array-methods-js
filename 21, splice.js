// La méthode splice() est utilisée pour modifier un tableau en ajoutant, supprimant ou remplaçant des éléments. La syntaxe est celle-ci : array.splice(start, deleteCount, item1, item2, ...). Le tableau d'origine est donc modifié.
// start : l'index à partir duquel commencer les modifications dans le tableau.
// deleteCount : le nombre d'éléments à supprimer à partir de l'index start. Si omis, tous les éléments à partir de start jusqu'à la fin du tableau seront supprimés.
// item1, item2, ... (optionnel) : un ou plusieurs éléments à ajouter à partir de l'index start. Si aucun élément n'est spécifié, splice() supprime simplement les éléments.


// Exemple 1 : supprimer des éléments
let array = [1, 2, 3, 4, 5];
//Supprime 2 éléments à partir de l'index 1
let removedArray = array.splice(1, 2);
console.log(array); // retourne [1, 4, 5]
console.log(removedArray); // retourne [2, 3]


//Exemple 2 : ajouter des éléments
let array1 = [1, 2, 3]
//Ajoute 4 et 5 à partir de l'index 1
array1.splice(1, 0, 4, 5);
console.log(array1) // retourne [1, 4, 5, 2, 3]

//Exemple 3 : remplacer des éléments
let array2 = [1, 2, 3, 4];
//Remplace 2 éléments à partir de l'index 1 par 5 et 6
array2.splice(1, 2, 5, 6);
console.log(array2) // Retourne [1, 5, 6, 4]