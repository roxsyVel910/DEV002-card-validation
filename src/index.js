import validator from './validator.js';

/*let input1 = document.querySelector(`#car-number`);*/
//let numberCard = document.querySelector('#number-card');
let valido = document.querySelector('#es-valido');
var arrayVacio = [];


document.querySelector('#pay').onclick = function () {
    //obtener datos del input
    var numero = document.querySelector('input[name="card"]').value;

    console.log("numero de targeta " + numero);
    validator.maskify(numero)
    validator.isValid(numero)



}

