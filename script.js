
console.log("hola mundo")
console.log("aqui podemos escribir cualquier cosa")
console.log("adios")
console.log("no hay autocompletado")
console.log("12345676")
console.log("-1.123")

//tipos de datos
/* declarar una variable */
let nombre = "juan varon"
console.log(nombre)

let Numero1 = 7;
let numero2 = 9;

let resultado = Numero1 + numero2
console.log("resultado:", resultado)
const pi = 3.1416
console.log(pi)
var apellido = "varon"
console.log(apellido)

//tipos de datos primitivos

//strings = texto
const ciudad = "bogota"
const pais = "colombia"
console.log(ciudad, pais)

// int, float - numeros
const suma = 5
const edad = 29.1
const numeroNegativo = -10
console.log(suma, edad, numeroNegativo)

//booleandos- verdadero o falso
let esVerde = true
let esNegro = false

// ------- Estructuras de Datos---------------

// Array - Vectores - Listas

let listaDeNumueros = [20, 21, 22, -55, 1000]
console.log(listaDeNumueros)
let listaDeAnimales = ["gato", "perro", "loro", "burro"]
console.log(listaDeAnimales)

// ver un elemento en la lista
console.log(listaDeNumueros[0])
console.log(listaDeNumueros[1])
console.log(listaDeNumueros[2])
console.log(listaDeNumueros[3])
console.log(listaDeNumueros[4])

let litaDeLlistas = [listaDeNumueros, listaDeAnimales]
console.log(litaDeLlistas)

//acceder a dato "loro"
console.log(litaDeLlistas[1][2])

// JSON (JavaScript Oject Notation) - objetos
// clave - varor
let usuario = {
    nombre: "juan",
    edad: 29,
    ciudad: "Bogota",
    ubicacion:{
        latitud: 4.628346868203769,
        longitud: -74.13560933598654,
    },
    amigos: ["andres", "pepito"] 
}
console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.ubicacion.latitud)


usuario.edad = 30
console.log(usuario.edad)

// tipos de datos vacios 

// null - nulo
let espacioVacio = null

// undefined - indefinido
let noDefinido = undefined

let algo 
console.log(algo)

// NaN - Not a Number - no es un numero
const noEsNumero = NaN
const multiplicacion = 10 * "hola"
console.log(multiplicacion)


// -------- Estructuras de control ---------

// Bucles - un proceso que se repite 
// Loop - bucle in finito

const ListaAnimales = [
    "perro",
    "gato",
    "oso",
    "gallina",
    "zorro",
    "paloma"
]

console.log("tamaño del array:", ListaAnimales.length)

// parametro 1: contador
// parametro 2: condicion para que se detenga
// parametro 3: comportamiento del contador 

/* for(let contador = 0; contador < ListaAnimales.length; contador = contador + 1) */ 
for(let i = 0; i < ListaAnimales.length; i++) {
    console.log(i)
    console.log(ListaAnimales[i])
}

// condiciones 
// - igualdad: ===
// - menor que: <
// - mayor que: >
// - menor o igual que: <=
// - mayor o igual que >=
