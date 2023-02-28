
var articulos = [
    {nombre: "Bici", costo: 3000 },
    {nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 320 },
    {nombre: "Celular", costo: 10000 },
    {nombre: "Laptop", costo: 20000 },
    {nombre: "Teclado", costo: 500 },
    {nombre: "Audifonos", costo: 1700 },
];


var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo <= 500;
})

console.log(articulosFiltrados)

/*articulosFiltrados
(2) [{...} {...}]
i
0: {nombre:
"Libro", costo: 320}
1: {nombre:
"Teclado", costo: 500}
length: 2*/


var nombreArticulos = articulos.map(function(articulos){
    return articulos.nombre
})

console.log(nombreArticulos)
//["Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === "Tv"

})
console.log(encuentraArticulos)
//{nombre: 'Tv', costo: 2500}


//foreach no va a generar un nuevo array solo devuelve cosas
articulos.forEach(function(articulos){
    console.log(articulos.nombre)
})