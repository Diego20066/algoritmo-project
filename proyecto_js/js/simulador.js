function calcularTotal() {
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const aplicarIva = document.getElementById("iva").checked;
  const resultado = document.getElementById("resultado");
  let subtotal = precio * cantidad;
  let descuento = 0 
  if (cantidad > 10){
    descuento=subtotal * 0.10
  }
  let  iva = 0
  if (aplicarIva==true){
    iva = (subtotal - descuento) * 0.15 
  } 
  const total = subtotal - descuento + iva;
  resultado.innerHTML = `
                Subtotal: ${subtotal.toFixed(2)} USD
                Descuento: ${descuento.toFixed(2)} USD
                IVA: ${iva.toFixed(2)} USD
                Total a pagar: ${total.toFixed(2)} USD
            `;
}

function verificarRespuesta1() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta1"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio1');
    
    if (!respuestaSeleccionada) {
        resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
        resultadoDiv.style.color = 'orange';
        return;
    }

    const respuestaCorrecta = '3';
    
    if (respuestaSeleccionada.value === respuestaCorrecta) {
        resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
        resultadoDiv.style.color = 'green';
    } else {
        resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
        resultadoDiv.style.color = 'red';
    }
}

function verificarRespuesta2() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta2"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio2');
    
    if (!respuestaSeleccionada) {
        resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
        resultadoDiv.style.color = 'orange';
        return;
    }

    const respuestaCorrecta = 'a';
    
    if (respuestaSeleccionada.value === respuestaCorrecta) {
        resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
        resultadoDiv.style.color = 'green';
    } else {
        resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
        resultadoDiv.style.color = 'red';
    }
}


function verificarRespuesta3() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta3"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio3');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta4() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta4"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio4');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'b';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta5() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta5"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio5');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'c';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta6() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta6"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio6');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta7() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta7"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio7');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'b';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta8() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta8"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio8');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta9() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta9"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio9');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta10() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta10"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio10');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'd';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta11() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta11"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio11');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta12() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta12"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio12');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta13() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta13"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio13');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'c';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta14() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta14"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio14');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'b';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta15() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta15"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio15');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'c';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}


function verificarRespuesta16() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta16"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio16');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'b';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta17() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta17"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio17');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'b';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta18() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta18"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio18');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta19() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta19"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio19');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'a';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}

function verificarRespuesta20() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta20"]:checked');
  const resultadoDiv = document.getElementById('resultadoEjercicio20');
  
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Seleccione una respuesta.</p>';
      resultadoDiv.style.color = 'orange';
      return;
  }

  const respuestaCorrecta = 'c';
  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
      resultadoDiv.style.color = 'green';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
      resultadoDiv.style.color = 'red';
  }
}
function verificarRespuesta21() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta21"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio21');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">¡Correcto!</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta22() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta22"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio22');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">¡Correcto!</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta23() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta23"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio23');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">¡Correcto!</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta24() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta24"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio24');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">¡Correcto!</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta25() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta25"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio25');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta26() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta26"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio26');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'c';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta27() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta27"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio27');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta28() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta28"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio28');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta29() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta29"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio29');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta30() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta30"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio30');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'd';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta31() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta31"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio31');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta32() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta32"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio32');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta33() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta33"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio33');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta34() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta34"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio34');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta35() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta35"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio35');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto. </p>';
    }
  }
  
  function verificarRespuesta36() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta36"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio36');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'd';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta37() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta37"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio37');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta38() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta38"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio38');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta39() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta39"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio39');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta40() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta40"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio40');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta41() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta41"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio41');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta42() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta42"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio42');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta43() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta43"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio43');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'c';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta44() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta44"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio44');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta45() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta45"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio45');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'c';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML =  '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta46() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta46"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio46');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta47() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta47"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio47');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta48() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta48"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio48');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta49() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta49"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio49');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta50() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta50"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio50');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta51() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta51"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio51');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'c';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta52() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta52"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio52');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'c';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta53() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta53"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio53');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'c';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta54() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta54"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio54');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'c';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta55() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta55"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio55');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'b';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta56() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta56"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio56');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'd';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto.</p>';
    }
  }
  
  function verificarRespuesta57() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta57"]:checked');
    const resultadoDiv = document.getElementById('resultadoEjercicio57');
  
    if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
      return;
    }
  
    const respuestaCorrecta = 'a';
  
    if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">Correcto</p>';
    } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">Incorrecto</p>';
    }
  }

function verificarRespuesta58() {
    const respuesta = document.querySelector('input[name="respuesta58"]:checked');
    const resultado = document.getElementById('resultadoEjercicio58');
    if (respuesta) {
        if (respuesta.value === 'b') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta59() {
    const respuesta = document.querySelector('input[name="respuesta59"]:checked');
    const resultado = document.getElementById('resultadoEjercicio59');
    if (respuesta) {
        if (respuesta.value === 'd') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta60() {
    const respuesta = document.querySelector('input[name="respuesta60"]:checked');
    const resultado = document.getElementById('resultadoEjercicio60');
    if (respuesta) {
        if (respuesta.value === 'd') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta61() {
    const respuesta = document.querySelector('input[name="respuesta61"]:checked');
    const resultado = document.getElementById('resultadoEjercicio61');
    if (respuesta) {
        if (respuesta.value === 'd') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta62() {
    const respuesta = document.querySelector('input[name="respuesta62"]:checked');
    const resultado = document.getElementById('resultadoEjercicio62');
    if (respuesta) {
        if (respuesta.value === 'd') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta63() {
    const respuesta = document.querySelector('input[name="respuesta63"]:checked');
    const resultado = document.getElementById('resultadoEjercicio63');
    if (respuesta) {
        if (respuesta.value === 'c') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta64() {
    const respuesta = document.querySelector('input[name="respuesta64"]:checked');
    const resultado = document.getElementById('resultadoEjercicio64');
    if (respuesta) {
        if (respuesta.value === 'a') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta65() {
    const respuesta = document.querySelector('input[name="respuesta65"]:checked');
    const resultado = document.getElementById('resultadoEjercicio65');
    if (respuesta) {
        if (respuesta.value === 'b') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta66() {
    const respuesta = document.querySelector('input[name="respuesta66"]:checked');
    const resultado = document.getElementById('resultadoEjercicio66');
    if (respuesta) {
        if (respuesta.value === 'd') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta67() {
    const respuesta = document.querySelector('input[name="respuesta67"]:checked');
    const resultado = document.getElementById('resultadoEjercicio67');
    if (respuesta) {
        if (respuesta.value === 'c') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta68() {
    const respuesta = document.querySelector('input[name="respuesta68"]:checked');
    const resultado = document.getElementById('resultadoEjercicio68');
    if (respuesta) {
        if (respuesta.value === 'a') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}

function verificarRespuesta69() {
    const respuesta = document.querySelector('input[name="respuesta69"]:checked');
    const resultado = document.getElementById('resultadoEjercicio69');
    if (respuesta) {
        if (respuesta.value === 'a') {
            resultado.textContent = 'Correcto';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'Incorrecto';
            resultado.style.color = 'red';
        }
    } else {
        resultado.textContent = 'Seleccione una respuesta.';
        resultado.style.color = 'orange';
    }
}
