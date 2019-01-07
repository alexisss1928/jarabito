/********************************
 * 
 * Funcion para calcular la dosis
 * 
*********************************/

function calc(arr) {
  const peso = document.getElementById("peso").value;

  const dosisMaxDiaria = peso * arr[0];
  const dosisMl = (dosisMaxDiaria * arr[1]) / arr[2];
  const dosisFinal = dosisMl / arr[3];
  return(dosisFinal);
}

/*****************************************
 * 
 * Funcion para disparar el boton del HTML
 * 
 ****************************************/

function myFunction() {
  const peso = document.getElementById("peso").value;

  var select = document.getElementById("medicamento");

  var medicamento = select.options[select.selectedIndex].value;

  var arr = medicamento.split(",");

  if (peso === "" || medicamento === "opciones") {
    document.getElementById("dosis").innerHTML = "Te falta algun dato";
  } else {
    document.getElementById("dosis").innerHTML = "La dosis de " + arr[4] + " es de " + calc(arr).toFixed(1) + " ml cada " + 24/arr[3] + " horas.";
  }
};