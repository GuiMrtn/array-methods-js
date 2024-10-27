let tabPersonnages = ["Zeus", "Hades", "Poséidon", "Achille", "Cyclope", "Titan", "Zeus", "Dragon noir", "Chevalier"];


//La méthode lastIndexOf() permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur donnée n'est pas présente, le résultat sera -1.
let zeusLastIndex = tabPersonnages.lastIndexOf("Zeus");
console.log(zeusLastIndex) //retourne 6

let hermesLastIndex = tabPersonnages.lastIndexOf("Hermès");
console.log(hermesLastIndex); //retourne -1