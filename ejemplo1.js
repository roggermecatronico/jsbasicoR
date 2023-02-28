var nombre = "Rogger"
//scope global

function saludar(){
    //scope local
    var kha;
    console.log("Hola " + nombre)
}

saludar()


console.log(nombre) // undefined
var nombre = "Rogger" 

// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Rogger"

//funciones

console.log( saludar() )

function saludar() {
  return "Hola"
}


// Hoisting: Declara la función antes de ser invocada
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"