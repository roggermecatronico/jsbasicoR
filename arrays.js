//how to create array with 4 fruts?
const fruits = ["Mango", "Apple", "Banana", "Pineapple", "Orange"];
console.log(fruits);

const uppercaseFruits = fruits.map((fruit)=>{
  return fruit.toUpperCase(); // this thing will be added to new array in every iteration
  });

console.log(uppercaseFruits);

let pets = [""]; // an item so that loop can start

const myPets = pets.map((item) => {
 return (
  ([{
      name: "cat",
      age: 4
   },{
     name: "dog",
     age: 6
   }])
 )
})

console.log(myPets)



//Source: https://stackoverflow.com/questions/72052005






