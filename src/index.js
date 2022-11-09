import validator from './validator.js';

/*let input1 = document.querySelector(`#car-number`);*/
//let numberCard = document.querySelector('#number-card');
let valido = document.querySelector('#es-valido');
let cardnum = document.querySelector("#numb-card");
let cvv = document.getElementById("cvv");
let dateCard =document.getElementById("fecha");
var arrayVacio = [];


document.querySelector('#pay').onclick = function () {
    //obtener datos del input
    const numero = document.querySelector('input[name="card"]').value;

    console.log("numero de targeta " + numero);
    if (validator.isValid(numero)){
       valido.innerHTML = "Númera de tarjeta valida"
    }
        else {
            valido.innerHTML = "Número de tarjeta no valida"
        }
    
    validator.maskify(numero)
    validator.isValid(numero)
    console.log("cifrado dos",  );

    cardnum.innerHTML = validator.maskify(numero)
    document.getElementById("date-card").innerHTML = dateCard.value;
    document.getElementById("ccv-card").innerHTML = cvv.value;
}

