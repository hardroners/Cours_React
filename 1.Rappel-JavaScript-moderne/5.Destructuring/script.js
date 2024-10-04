/* 
    1. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany"
}

// const {age,country,userName} = userObj  


// Donner un nom différent aux constantes

//const {userName: mainName, age: exactAge, country: origin} = userObj



// Créer des constantes par défaut, au cas où les props n'existent pas.

// const {country, sport = "football", beverage = "Beer"} = userObj

// Combiner un nom différent et des valeurs par défaut.

const {userName: mainName = "Hanz"} = userObj


// Affecter les props d'un objet attendu en paramètre

const numbers = {
  num1: 50,
  num2: 100
}
function foo({num1, num2}) {
  console.log(numbers)
  return num1 + num2
}

/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat","dog","mouse","lion"];

const [cat, dog] = animals

let animal1, animal2
[animal1, animal2] = animals


// valeur par défaut et ignorer des valeurs

const fruits = ["strawberry", "grapes", "banana","apple"]

// const [strawberry,grapes,,apple] = fruits

const [strawberry = "Red Fruits"] = fruits

// affecter le reste d'un tableau

const [student, ...marks]= ["Adrien", 10,12,11,20,2]

// Fonctionne aussi avec les strings
const str = "ABC"
