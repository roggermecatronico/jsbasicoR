
function marcaAuto(){
const options = ['Tesla', 'audi', 'Toyota'];
const randomNumber = Math.floor(Math.random() * 3);
const computerSelection = options[randomNumber];
return computerSelection
}


function annioAuto(){
    const min = 2015;
    const max = 2023;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber
}

function modeloAuto(){
    const options = ['corola', 'Camaro', 'Series 3', "model X", "pilot"];
    const randomNumber = Math.floor(Math.random() * 5);
    const modelo = options[randomNumber];
    return modelo
}

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var variable 
let autoNumero = []
let autosObjeto = {}

console.log("hola")
for(let i=0;i<9;i++){
    variable = new auto(marcaAuto(),modeloAuto(),annioAuto())
    autoNumero[i]=variable 
    autosObjeto[variable] = i + 1;

    console.log(autoNumero[i])

}
console.log(autosObjeto)


