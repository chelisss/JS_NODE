//Creamos un objeto y lo exportamos con module.exports
const Math = {};

function sumar(x1,x2) {
    return x1+x2;
}
function restar(x1,x2) {
    return x1+x2;
}
function multiplicar(x1,x2) {
    return x1+x2;
}
function dividir(x1,x2) {
    if(x2 == 0){
        console.log("No hay divisiones entre cero. ");
    }else{
        return x1 / x2;
    }
}

//Vamos a exportar alguna funciòn llamada ADD
/*
exports.add = sumar;
*/


//Del objeto, tomamos la propiedad sumar y decimos que use la función "sumar"
//Asi para cada una de las propiedades. 

Math.sumar = sumar;
Math.restar = restar;
Math.multiplicar = multiplicar;
Math.dividir = dividir;

/*
function hello(name) {
    console.log("Hola, "+name);
}
*/

//Exportamos el modulo como tal.
module.exports = Math;
//module.exports = hello;

