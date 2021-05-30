class Medicine {
    constructor(dosisKilo, dosisDia, mL, mG, nota, contra, comercial) {
        this.dosisKilo = dosisKilo;
        this.dosisDia = dosisDia;
        this.mL = mL;
        this.mG = mG;
        this.nota = nota;
        this.contra = contra;
        this.comercial = comercial;
    }
}

//Dosis de Analgesicos

const acetaminofen = new Medicine(
    20,
    4,
    5,
    150,
    "Puede indicarse durante el embarazo",
    "Atamel, Tachipirin, Tempra"
);

const dipirona = new Medicine(
    12,
    4,
    1,
    50,
    "Usar como ultima opción, indicado en pacientes con trastornos hepáticos",
    "Disminuye resistencia a infecciones",
    "Bral, Conmel, Novalcina"
);

const diclofenac = new Medicine(
    2,
    2,
    1,
    1.8,
    "Se recomienda su uso en niños mayores de 1 año",
    "",
    "Cataflan, Clofen"
);

const ibuprofeno = new Medicine(
    10,
    2,
    5,
    100,
    "Se recomienda su uso en niños mayores de 2 años",
    "Antiagregante plaquetario en menor grado",
    "Brugesic"
);

const ketoprofeno = new Medicine(
    0.5,
    3,
    1,
    1,
    "Excelente en traumatismos, se recomienda su uso en niños a partir de 6 meses",
    "",
    "Profenid"
);

//Dosis de Antibioticos
const amoxicilina125 = new Medicine(
    90,
    3,
    5,
    125,
    "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
    "",
    "Trimoxal, Amoxal, Genfar, Amoxiduo"
);

const amoxicilina250 = new Medicine(
    90,
    3,
    5,
    250,
    "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
    "",
    "Trimoxal, Amoxal, Genfar, Amoxiduo"
);

const amoxicilina500 = new Medicine(
    90,
    3,
    5,
    500,
    "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
    "",
    "Trimoxal, Amoxal, Genfar, Amoxiduo"
);

const amoxicilina750 = new Medicine(
    90,
    2,
    5,
    750,
    "Actuá sobre la mayoría de microorganismos de la cavidad bucal",
    "",
    "Trimoxal, Amoxal, Genfar, Amoxiduo"
);

const amoxicilinaCla250 = new Medicine(
    90,
    3,
    5,
    250,
    "Niños mayores de 40Kg se maneja como adulto",
    "Se ha reportado pigmentación en las superficies dentales",
    "Augmentin, Fulgram"
);

const amoxicilinaCla400 = new Medicine(
    90,
    3,
    5,
    400,
    "Niños mayores de 40Kg se maneja como adulto",
    "Se ha reportado pigmentación en las superficies dentales",
    "Augmentin, Fulgram"
);

const amoxicilinaCla600 = new Medicine(
    90,
    2,
    5,
    600,
    "Niños mayores de 40Kg se maneja como adulto",
    "Se ha reportado pigmentación en las superficies dentales",
    "Augmentin, Fulgram"
);

const eritromicina150 = new Medicine(
    50,
    4,
    5,
    150,
    "En desuso, siempre debe drenarse absceso antes de indicarlo",
    "",
    "Ilosone"
);

const eritromicina250 = new Medicine(
    50,
    4,
    5,
    250,
    "En desuso, siempre debe drenarse absceso antes de indicarlo",
    "",
    "Ilosone"
);

const claritromicina125 = new Medicine(7.5, 2, 5, 125, "", "", "klaricid");

const claritromicina250 = new Medicine(7.5, 2, 5, 250, "", "", "Klaricid");

const azitromicina = new Medicine(10, 1, 5, 200, "", "", "Zitromax");

const sultamicilina = new Medicine(
    50,
    2,
    5,
    250,
    "Niños mayores de 30Kg se maneja como adulto",
    "",
    "Unasyn"
);

const cefadroxilo250 = new Medicine(
    50,
    2,
    5,
    250,
    "Ideal para infecciones en tejido blando",
    "En pacientes alérgicos a la penicilina puede crear reacción cruzada",
    "Bidroxil, Cefonax"
);

const cefadroxilo500 = new Medicine(
    50,
    2,
    5,
    500,
    "Ideal para infecciones en tejido blando",
    "En pacientes alérgicos a la penicilina puede crear reacción cruzada",
    "Bidroxil, Cefonax"
);

const metronidazol125 = new Medicine(
    50,
    4,
    5,
    125,
    "",
    "No se debe mezclar con alcohol etílico por riesgo de efecto antabus, se debe esperar 48 horas",
    "Flegyl, Metrovax"
);

const metronidazol250 = new Medicine(
    50,
    4,
    5,
    250,
    "",
    "No se debe mezclar con alcohol etílico por riesgo de efecto antabus, se debe esperar 48 horas",
    "Flegyl, Metrovax"
);

//Dosis anestesicas
const lidocaina = new Medicine(4.4, 36, "", "", "");

const mepivacaina = new Medicine(4.4, 54, "", "", "");

const articaina = new Medicine(
    7,
    72,
    "Contraindicado en menores de 4 años",
    "",
    ""
);

//Dosis preventivas de antibioticos
const amoxicilinaPre125 = new Medicine(
    50,
    1,
    5,
    125,
    "Trimoxal, Amoxal, Genfar, Amoxiduo",
    "",
    "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
);

const amoxicilinaPre250 = new Medicine(
    50,
    1,
    5,
    250,
    "Trimoxal, Amoxal, Genfar, Amoxiduo",
    "",
    "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
);

const amoxicilinaPre500 = new Medicine(
    50,
    1,
    5,
    500,
    "Trimoxal, Amoxal, Genfar, Amoxiduo",
    "",
    "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
);

const amoxicilinaPre750 = new Medicine(
    50,
    1,
    5,
    750,
    "Trimoxal, Amoxal, Genfar, Amoxiduo",
    "",
    "En niños con mas de 27Kg y adultos administrar una dosis única de 2g"
);

const azitromicinaPre = new Medicine(
    15,
    1,
    5,
    200,
    "Zitromax",
    "",
    "En niños con mas de 27Kg y adultos administrar una dosis única de 500mg"
);

const claritromicinaPre125 = new Medicine(
    15,
    1,
    5,
    125,
    "Claricid",
    "",
    "En niños con mas de 27Kg y adultos administrar una dosis única de 500mg"
);

const claritromicinaPre250 = new Medicine(
    15,
    1,
    5,
    250,
    "Claricid",
    "",
    "En niños con mas de 27Kg y adultos administrar una dosis única de 500mg"
);
//Animacion menu sandwich
document.getElementById("header__menu").addEventListener("click", function () {
    var i = Array.from(document.querySelectorAll("#header__menu div"));
    i[0].classList.toggle("header__menu--up");
    i[1].classList.toggle("header__menu--mid");
    i[2].classList.toggle("header__menu--down");
    document.querySelector("#menuPhone").classList.toggle("unhideMenuPhone");
});

//Cerrar menu
document
    .getElementById("close__menuPhone")
    .addEventListener("click", function () {
        event.preventDefault();
        var i = Array.from(document.querySelectorAll("#header__menu div"));
        i[0].classList.toggle("header__menu--up");
        i[1].classList.toggle("header__menu--mid");
        i[2].classList.toggle("header__menu--down");
        document
            .querySelector("#menuPhone")
            .classList.toggle("unhideMenuPhone");
    });

//Abrir ayuda de dosis
if (document.querySelector("#dosis_question")) {
    document
        .querySelector("#dosis_question")
        .addEventListener("click", function () {
            event.preventDefault();
            document.querySelector("#dosis_ayuda").classList.add("unhide");
            document.querySelector(".block").style.display = "block";
        });
}

//Cerrar ayuda de dosis
if (document.querySelector("#ayuda_close")) {
    document
        .querySelector("#ayuda_close")
        .addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector("#dosis_ayuda").classList.remove("unhide");
            document.querySelector(".block").style.display = "none";
        });
}

//Abrir ayuda de dosis diarias
if (document.querySelector("#dosisDiarias")) {
    document
        .querySelector("#dosisDiarias")
        .addEventListener("click", function () {
            event.preventDefault();
            document.querySelector("#diaria_ayuda").classList.add("unhide");
            document.querySelector(".block").style.display = "block";
        });
}

//Cerrar ayuda de dosis diarias
if (document.querySelector("#diaria_close")) {
    document
        .querySelector("#diaria_close")
        .addEventListener("click", function () {
            event.preventDefault();
            document.querySelector("#diaria_ayuda").classList.remove("unhide");
            document.querySelector(".block").style.display = "none";
        });
}

//Limpiar inputs del formulario
document
    .querySelector("#buttons__clear")
    .addEventListener("click", function () {
        document.getElementById("datos").reset();
        document.getElementById("select").value = "opciones";
        document.querySelector("#containerDescripcion__contras p").innerHTML =
            "";
        document.querySelector("#containerDescripcion__notas p").innerHTML = "";
        document.querySelector(
            "#containerDescripcion__presentaciones p"
        ).innerHTML = "";
    });

//Agregar valores predeterminados a los inputs
document.querySelector("#select").addEventListener("change", function () {
    const med = eval(document.querySelector("#select").value);
    document.querySelector("#dosisKg").value = med.dosisKilo;
    document.querySelector("#dosisDia").value = med.dosisDia;
    document.querySelector("#ml").value = med.mL;
    document.querySelector("#mg").value = med.mG;
    document.querySelector("#containerDescripcion__notas p").textContent =
        med.nota;
    med.contra !== ""
        ? (document.querySelector(
              "#containerDescripcion__contras p"
          ).innerHTML = "<span>Contras: </span>" + med.contra)
        : (document.querySelector(
              "#containerDescripcion__contras p"
          ).innerHTML = "");
    med.comercial !== ""
        ? (document.querySelector(
              "#containerDescripcion__presentaciones p"
          ).innerHTML = "<span>Nombre comercial: </span>" + med.comercial)
        : (document.querySelector(
              "#containerDescripcion__presentaciones p"
          ).innerHTML = "");
});

if (!document.querySelector("#body__anestesicos")) {
    //Calculo de dosis antibioticas y analgesicas
    document
        .querySelector("#buttons__calcular")
        .addEventListener("click", function () {
            //Variables para los calculos
            const peso = document.getElementById("pesoNino").value;
            const dosis = document.getElementById("dosisKg").value;
            const dosisDia = document.getElementById("dosisDia").value;
            const mL = document.getElementById("ml").value;
            const mG = document.getElementById("mg").value;
            const dosisMaxDiaria = peso * dosis;
            const dosisMl = (dosisMaxDiaria * mL) / mG;
            const dosisFinal = dosisMl / dosisDia;

            //Verificar si falta algun dato o resolver la dosis
            if (
                peso === "" ||
                dosis === "" ||
                dosisDia === "" ||
                mL === "" ||
                mG === ""
            ) {
                document.querySelector("#resultado").classList.add("unhide");
                document.querySelector("#alert_message").textContent =
                    "Opss!! parece que te falta algún dato, por favor verificalos";
                document.querySelector(".block").style.display = "block";
            } else {
                document.querySelector("#resultado").classList.add("unhide");
                document.querySelector(".block").style.display = "block";

                //Mensaje de alerta con el resultado
                if (
                    document.querySelector("form").classList.contains("prevent")
                ) {
                    document.querySelector("#alert_message").textContent =
                        "La dosis del medicamento es de " +
                        dosisFinal.toFixed(1) +
                        " ml en una dosis unica 30 o 60 minutos antes del tratamiento";
                    document.querySelector(".block").style.display = "block";
                } else {
                    document.querySelector("#alert_message").innerHTML =
                        "La dosis del medicamento es de " +
                        dosisFinal.toFixed(1) +
                        " ml cada " +
                        24 / dosisDia +
                        " horas.";
                    document.querySelector(".block").style.display = "block";
                }

                //Resetear valores de los input luego de calcular
                document.getElementById("datos").reset();
                document.getElementById("select").value = "opciones";
            }
        });

    //Remover clase para alerta con el resultado
    document
        .querySelector("#resultado_close")
        .addEventListener("click", function () {
            document.querySelector("#resultado").classList.remove("unhide");
            document.querySelector(".block").style.display = "none";
        });
} else {
    //Calculo de dosis anestesicas
    document
        .querySelector("#buttons__calcular")
        .addEventListener("click", function () {
            //Variables para los calculos
            const peso = document.getElementById("pesoNino").value;
            const dosis = document.getElementById("dosisKg").value;
            const dosisDia = 36;
            const dosisMaxDiaria = peso * dosis;
            const dosisFinal = dosisMaxDiaria / dosisDia;

            //Verificar si falta algun dato o resolver la dosis
            if (peso === "" || dosis === "") {
                document.querySelector("#resultado").classList.add("unhide");
                document.querySelector("#alert_message").textContent =
                    "Opss!! parece que te falta algún dato, por favor verificalos";
                document.querySelector(".block").style.display = "block";
            } else {
                //Agregar clase para alerta con el resultado
                document.querySelector("#resultado").classList.add("unhide");
                document.querySelector(".block").style.display = "block";

                //Mensaje de alerta con el resultado
                document.querySelector("#alert_message").textContent =
                    "Se recomienda administrar " +
                    dosisFinal.toFixed(1) +
                    " cartuchos de anestesia";

                //Resetear valores de los input luego de calcular
                document.getElementById("datos").reset();
            }
        });

    document
        .querySelector("#resultado_close")
        .addEventListener("click", function () {
            document.querySelector("#resultado").classList.remove("unhide");
            document.querySelector(".block").style.display = "none";
        });
}
