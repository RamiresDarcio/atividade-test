
function soma(a,b){
    return a+b;
}

function subt (a,b){
     return a-b;

}
function mult (a,b){
    return a*b;

}
function divado (a,b){
     return a/b;

}
function imprimirResultador( resultador1,resultador2,resultador3,resultador4){
    alert("o resutador da soma é "+ resultador1);
    alert("o resutador de subltação "+ resultador2);
    alert("o resutador mutiplicação  " + resultador3);
    alert("o resutaodr de divição "+ resultador4)

}

let numero1 = parseInt(prompt("digiter um número inteiro"));
let numero2 = parseInt(prompt("digiter um numeto inteiro" ));
let resultador1 = soma (numero1,numero2);
let resultador2 =  subt (numero1,numero2);
let resultador3 = mult (numero1,numero2);
let resultador4 = divado(numero1,numero2);

imprimirResultador(resultador1,resultador2,resultador3,resultador4)