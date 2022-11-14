
function numeroPar(mult) {


    if (mult >= 10) {
        var numtwo = mult.toString().split("");
        console.log("dos digitos " + numtwo);
        let sumar = numtwo.reduce(
            (primerValor, segundoValor) => {
                let a = parseInt(primerValor)
                let b = parseInt(segundoValor)

                return a + b;
            }
        );
        console.log("sumar dos digitod " + sumar);
        return sumar;

    }
    else {
        return mult;
    }

}

const validator = {

    maskify: function (numeros) {
        let characters = "";
        for (let i = 0; i < numeros.length; i++) {
            if (i < numeros.length - 4) {
                characters = characters + "#";

            }
            else {
                characters = characters + numeros[i]
            }
        }
        return characters

        /*const characters = numeros.substr(-4);
        console.log("ocultar  " + characters);
  
        const maskifyCharacters = numeros.substr(0, numeros.length-4).replace(/\d|[a-zA-Z]/g , "#");
        console.log("ocultar 2" + maskifyCharacters); */
    },


    isValid: function (creditCardNumber) {
        var array = creditCardNumber.split('').reverse()
        console.log("array reverse",array);

        //obtener posisiones par
        const newArray = array.map(function (valor, index) {
            let newNumbers = [];

            if (index % 2 == 1) {

                console.log("array index " + valor);
                newNumbers = numeroPar(valor * 2)
                console.log("new array pares " + newNumbers)
            }
            else {
                newNumbers = parseInt(valor)

            }

            return newNumbers;
        });

               
        let total = newArray.reduce((a, b) => a + b)
        console.log(" suma de todos   ", total)
        
        if (total % 10 == 0) {
            console.log("verdaero");
            return true


        }
        else {
            console.log("falso")
            return false
        }
    }
};



export default validator;
