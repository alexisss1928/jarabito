/********************************
 ** Funcion de frases aleatorias*
 ********************************/

function frases_alea(){

  frases = new Array();
  
  frases[0] = "Recompensen a los niños con elogios, no con comida.";
  frases[1] = "No exijan ni premien un “plato limpio”. Dejen que sus hijos pidan más si aún tienen hambre.";
  frases[2] = "Horneen, hiervan o asen los alimentos para reducir la grasa.";
  frases[3] = "Eviten cocinar con mantequilla o aceite vegetal. Usen versiones más saludables como aceite de oliva, canola o girasol.";
  frases[4] ="Elijan bocadillos que proporcionen nutrientes y energía; son esenciales para niños activos y en crecimiento.";
  frases[5] ="Hablen con el médico sobre suplementos vitamínicos para ustedes y sus hijos.";
  frases[6] ="Muévanse más. Intenten hacer entre 30 y 60 minutos de actividad física por día. Las sesiones breves de movimiento a lo largo del día, se suman.;"
  frases[7] ="Incluyan la actividad física en su rutina diaria. Caminen en familia antes o después de las comidas.";
  frases[8] ="Hagan de la diversión familiar un momento de juegos. Pueden jugar básquet o juegos de persecución.";
  frases[9] ="Ejercítense mientras miran televisión en casa. Usen una máquina, levanten pesas y estiren.";
  frases[10] ="Usen las escaleras en lugar del elevador.";
  
  aleatorio=Math.floor(Math.random()*4);
  
  return frases[aleatorio];
  
  }

  onload=function(){
      document.getElementById('cita').innerHTML=frases_alea();
      setInterval(function(){document.getElementById('cita').innerHTML=frases_alea();},5000)
  }

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
    document.getElementById("dosis").innerHTML = "La dosis de " + arr[4] + " es de " + calc(arr).toFixed(1) + " ml cada " + 24/arr[3] + " horas.<br><br>- La dosis calculada es orientativa. <br>-Consulte con su médico o farmacéutico en caso de duda. ";
  }
};

/****************
 ******Menu******
 ***************/

function openMenu() {
  const open = document.getElementById("container__menuMovil");
  open.style.left = "0";
}

function closeMenu() {
  const close = document.getElementById("container__menuMovil");
  close.style.left = "100%";
};


/**
function openMenu(e) {
  e.preventDefault();
   const open = document.getElementById("two");
 open.style.left = "0";}
 
 function init() {
  const link = document.querySelector('a');
  link.addEventListener('click', openMenu)
 };
 
 init();
  */