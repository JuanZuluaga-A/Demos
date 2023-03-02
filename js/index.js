console.log ('Hola Mundo')
let miprimeravariable='Mi Primera variable!'
console.log (miprimeravariable)

miprimeravariable = 'Esto Ha Cambiado'
console.log (miprimeravariable)

let miboolean = true
let miotrobool = false

let minumero = 0
let minumero2 = 12
let minumero3 = -258
console.log (minumero, minumero2, miboolean, miprimeravariable)

let undef
console.log (undef)

let nulo = null

console.log (nulo)

const miprimerobjeto ={}

const miobjeto = {
    unnumero: 12,
    unstring: 'caracteres',
    unacondicion: true,
}

console.log (miobjeto)

const arrvacio = []
const arr = [1, 2, 'hola', 'holamundo', miobjeto]

console.log (arrvacio, arr)

arr.push (5)

console.log (arr)

const suma = 1 + 2
const resta = 1 - 2
const  mult = 1 * 2
const div = 1 / 2

console.log (suma, resta, mult, div)

const modulo = 10 % 3

console.log (modulo);

let num = 5
console.log (num);

num++
num++
console.log (num);

num--
num--
num--
console.log (num);

num +=3
console.log (num);

num -=3
console.log (num);

num *=3
console.log (num);

num /=3
console.log (num);

const resultado1 = 5 === '5'
console.log (resultado1);

const resultado2 = 5 == '5'
console.log (resultado2);

const resultado3 = 5 < 6
console.log (resultado3);

const resultado4 = 5 < 4
console.log (resultado4);

const resultado5 = 5 !== '5'
console.log (resultado5);

const resultado6 = 5 != '5'
console.log (resultado6);

const resultadoOR = false || true
console.log (resultadoOR);

const resultadoAND =  true && false 
console.log (resultadoAND);

const resultadonot = !true
console.log (resultadonot);

const resultadonot2 = !false
console.log (resultadonot2);

if (true) {
console.log ('texto dentro de un IF')
};

const edad = 5;
if (edad > 5 && edad < 18) {
    console.log ('El niño puede jugar')
    }
else {
    console.log ('El niño no puede jugar')
};
let x = 0
while (x < 5) {
    console.log (x);
    x++
}
console.log ('terminando loop')

let x1 = true
while (x1) {
    console.log (x1);
    x1=false
}
console.log ('terminando loop')

x2 = false

const y = 1

switch (y) {
    case 1: 
    {console.log ('Caso Numero 1')
    break;
};
    case 2: 
    {console.log ('Caso Numero 2')
    break;
};
    case 3: console.log ('Caso Numero 3')
    break;
    default: console.log ('Default');
    break;
}

for (let i = 0; i < 10; i++) {
    console.log (i);
}

const numeros = [1, 2, 'hola', 4, 5,]
    console.log (numeros[0])

for (let i = 0; i < numeros.length; i++) {
    console.log (numeros [i]);
}

function iterar (arg1) {
    for (let i = 0; i < arg1.length; i++) {
        console.log (arg1 [i]);
        }
}
const Nombres = ['pedro', 'Juan','Felipe','Carlos','Mateo']
iterar (numeros)
iterar (Nombres)

function sumaF(a, b) {
    console.log(a + b)
}

sumaF(1, 2)

function sumaF2(a, b) {
    return a + b;
}


const Resultadosuamaf2 = sumaF2(1, 2)

console.log('resultado:', Resultadosuamaf2)

function sumar2 (a, b, cb) {
    const r1 = a + b
    cb(r1)
}

function callback(resul) {
    console.log(resul)
}

sumar2 (2, 3, callback)

const fatarrow = (a, b) => a + b
const rfa = fatarrow (1, 2)
    console.log(rfa);

const fatarrow2 = (a, b) => {
    return a + b;
}
const rfa2 = fatarrow2 (1, 2)
    console.log(rfa2);

sumar2 (2, 3, function (r) {
    console.log('resultado de funcion anonima', r)
})