
function rellenaCamposFecha(){
    const $select = document.querySelector("years");

    const option = document.createElement('option');
    
    for(var i = 0; i < 150; i++){
        option.value = 1900 + i;
        $select.appendChild(option);
    }

    $select.addEventListener();
}

function validaDni(){
    var dni;
    var numero;
    var letra;
    var letras;
    var expresion_regular_dni;

    numero = document.getElementById("num_dni").value;
    letra =  document.getElementById("letra_dni").value;

    dni = numero+letra;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if(expresion_regular_dni.test(dni) == true){
        numero = numero % 23;

        letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        letras = letras.substring(numero, numero+1);

        if(letras != letra.toUpperCase()){
            alert("Dni erroneo, la letra del NIF no se corresponde");
            return false;
        }
        else{
            alert("DNI CORRECTO");
            return true;
        }
    }
    else{
        alert('Dni erroneo, formato no válido');
    }
}