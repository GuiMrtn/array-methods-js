// La méthode valueOf() est une méthode intégrée qui renvoie la valeur primitive d'un objet. Elle est généralement utilisée pour obtenir la valeur sous-jacente d'un objet lorsque celui-ci est utilisé dans un contexte où une valeur primitive est attendue, comme une opération mathématique ou une comparaison.
// Objets de base : pour les objets de base, comme les nombres ou les chaînes, valueOf() retourne simplement leur valeur primitive.
// Objets personnalisés : Pour des objets créés par l'utilisateur, tu peux définir ta propre méthode valueOf() pour retourner une valeur spécifique.

// Exemple avec un nombre
//Pour un objet Number, valueOf() renvoie la valeur numérique
let num = new Number(42);
console.log(num.valueOf()) // retourne 42

// Exemple avec une chaîne de caractères
// Pour un objet String, valueOf() renvoie la chaîne de caractères
let str = new String("Hello");
console.log(str.valueOf()) // retourne "Hello"

//Exemple avec un objet personnalisé
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    valueOf() {
        return this.name; // Retourne le nom de la personne
    }
}


let person = new Person("John", 30);
console.log(person.valueOf()); // retourne "John"
