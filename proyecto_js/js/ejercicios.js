// ejercicio1 
function calcuPromPar() {
    const numerosStr = document.getElementById("numeros").value;
    const respuesta = document.getElementById("resp");
    const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
    let suma = 0;
    let conteo = 0;
    for (let i = 0; i < numeros.length; i++) {
      if ( numeros[i] % 2 ===0){
        suma += numeros[i];
        conteo++;
  
    }
  }
}

// ejercicio 2
function conPalabra() {
    debugger
    const texto = document.getElementById("texto").value.trim();
    const respuesta = document.getElementById("resp");
    lon = texto.length
  
    let cont=0
    let acum=1
    let palabra=""
  
    while (cont<lon){
      palabra=texto[cont]
  
      if (palabra ==' '){
        acum=acum+1
      }
      cont=cont+1
    }
  
  
    respuesta.innerHTML = ` El numero de palabras es : ${acum} `
}

// ejercicio3
function divisiblesPor3Y7() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let resultado = "";
    resultado += "Números divisibles por 3: ";
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0) {
        resultado += i + " ";
        if (i % 2 === 0) {
          sumaPares += i;
        } else {
          sumaImpares += i;
        }
      }
    }
    resultado += "\n\n";
    resultado += "Números divisibles por 7: ";
    for (let i = 1; i <= 50; i++) {
      if (i % 7 === 0) {
        resultado += i + " ";
        if (i % 2 === 0) {
          sumaPares += i;
        } else {
          sumaImpares += i;
        }
      }
    }
    resultado += `\n\nSuma de números pares: ${sumaPares}`;
    resultado += `\nSuma de números impares: ${sumaImpares}`;
    document.getElementById("resultado").value = resultado;
}
  
// ejercicio 4
function contarDigitos() {
    let frase = document.getElementById("frase").value;
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] >= '0' && frase[i] <= '9') {
        contador++;
      }
    }
    document.getElementById("resultado").value = `${contador} dígitos tiene la frase`;
}

// ejercicio 5
function calcularDivisores() {
    let numero = parseInt(document.getElementById("numero").value);
    let divisores = [];
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) { 
        divisores.push(i);
      }
    }
  
    if (divisores.length > 0) {
      document.getElementById("resultado").value = `Los divisores de ${numero} son: ${divisores.join(', ')}`;
    } else {
      document.getElementById("resultado").value = `El número ${numero} no tiene divisores (además de sí mismo).`;
    }
}

//ejercicio 6
function calcularTotal() {
    var producto = document.getElementById("producto").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var precio = parseFloat(document.getElementById("precio").value);
    var total = cantidad * precio;

    if ((producto === "televisor" || producto === "Televisor" || producto === "TELEVISOR") && cantidad >= 2) {
        total = total * 0.90;
    } else if ((producto === "refrigeradora" || producto === "Refrigeradora" || producto === "REFRIGERADORA") && cantidad > 3) {
        total = total * 0.85;
    }

    if (total > 2000) {
        total = total * 0.95;
    }

    document.getElementById("total").value = "Total a pagar: $" + total.toFixed(2);
}


// ejercicio 7
function verificarPerfecto() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resp");
  
    if (!numero || numero <= 0) {
        resultado.value = "Por favor, ingresa un número positivo.";
        return;
    }
  
    var sumaDivisores = 0;
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
  
    if (sumaDivisores === numero) {
        resultado.value = "El número " + numero + " es perfecto.";
    } else {
        resultado.value = "El número " + numero + " no es perfecto.";
    }
}


// ejercicio 8
function calcularFactura() {
    const montoBase = parseFloat(document.getElementById("montoBase").value);
    const dia = document.getElementById("dia").value;
    const personas = parseInt(document.getElementById("personas").value);
    const metodoPago = document.getElementById("metodoPago").value;
    const resultado = document.getElementById("resp");
  
    if (isNaN(montoBase) || isNaN(personas) || montoBase <= 0 || personas <= 0) {
        resultado.value = "Por favor, ingresa valores válidos.";
        return;
    }
  
    let total = montoBase;
    if ((dia === "Lunes" || dia === "Miércoles") && personas > 4) {
        total *= 0.85; 
    } else if (dia === "Sábado" || dia === "Domingo") {
        total *= 1.10; 
    }
    if (metodoPago === "tarjeta") {
        total *= 1.05; 
    }
  
    resultado.value = `Total a pagar: $${total.toFixed(2)}`;
}

// ejercicio 9
function sumarDigitos() {
    const numeroInput = document.getElementById("numero").value;
    const respuesta = document.getElementById("resp");
  
    
    const digitos = [];
    for (let i = 0; i < numeroInput.length; i++) {
      const digito = parseInt(numeroInput[i], 10);
      if (!isNaN(digito)) {
        digitos.push(digito); 
      } else {
        respuesta.value = "Por favor, ingresa un número válido.";
        return;
      }
    }
    const suma = digitos.reduce((total, num) => total + num, 0);
    respuesta.value = `La suma de los dígitos es: ${suma}`;
  }