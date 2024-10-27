// La méthode isArray() est utiliser pour déterminer si une valeur donnée est un tableau. Cette méthode retourne true si la valeur et un tableau et false dans le cas contraire. La suntaxe est celle-ci Array.isArray(value)

console.log(Array.isArray([1, 2, 3])); // Retourne true
console.log(Array.isArray("Hello")); // Retourne false
console.log(Array.isArray({})); // Retourne false
console.log(Array.isArray(null)); // Retourne false


console.log(Array.isArray([])); // Retourne true
console.log(Array.isArray([[1, 2], [3]])); // Retourne true
console.log(Array.isArray([
    {"nom": "Zeus", "puissance": 300, "prix": 10000},
    {"nom": "Hades", "puissance": 200, "prix": 6000},
    {"nom": "Poséidon", "puissance": 175, "prix": 5000},
    {"nom": "Achille", "puissance": 165, "prix": 4500},
    {"nom": "Cyclope", "puissance": 100, "prix": 3000},
    {"nom": "Titan", "puissance": 250, "prix": 8000},
    {"nom": "Dragon noir", "puissance": 220, "prix": 6800},
    {"nom": "Chevalier", "puissance": 65, "prix": 1000}
])); // Retourne true
