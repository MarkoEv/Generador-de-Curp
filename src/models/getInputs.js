import { clickInstructions } from "../utils/clickInstructions";
import { renderCurpBoxes } from "../components/renderCurpBoxes";

export let curp = {
  digitoOne: "",
  digitoTwo: "",
  digitoTree: "",
  digitoFour: "",
  digitoYear: "",
  digitoMonth: "",
  digitoDay: "",
  digitoGender: "",
  digitoEstate: "",
  digitoConsoApP: "",
  digitoConsoApM: "",
  digitoConsoName: "",
  digitoSigle: "",
  digitoEnd: "",
};

// obtener numero random
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funcion para obtener la primer vocal de la cadena recibida
function primeVocal(cadena, min, max) {
  const subtraccion = cadena.substring(min, max);
  const vocal = subtraccion.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/);
  const resultado = vocal ? vocal[0] : "";
  return resultado.toUpperCase();
}

// obtener tipo de siglo: [A] o [0]
function ObtenerSiglo(year) {
  return year >= 2000 ? "A" : "0";
}

// obtener consonante
function primerConsonant(cadena, min, max) {
  const subtraccion = cadena.substring(min, max);
  const consonantes = subtraccion.match(
    /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/,
  );
  return consonantes ? consonantes[0].toUpperCase() : "";
}

// extraer los values de los inputs
export const getInputsValues = () => {
  const apellidoP = document.getElementById("apellidoP");
  const apellidoM = document.getElementById("apellidoM");
  const primerName = document.getElementById("primerName");
  const days = document.getElementById("days");
  const months = document.getElementById("months");
  const years = document.getElementById("years");
  const estates = document.getElementById("estates");
  const genero = document.getElementById("botones");
  const btnNumberRand = document.getElementById("numberRand");

  // extra: Boton para mostrar innfrormacion sobre el dígito verificador
  const whatIs = document.getElementById("whatIs");
  whatIs.addEventListener("click", () => {
    clickInstructions(
      whatIs,
      " El último dígito de la CURP es un dígito verificador que sirve para confirmar que la clave está bien construida;  en la práctica no siempre es confiable calcularlo manualmente sin usar la implementación oficial.",
    );
  });

  // evento de click
  clickInstructions(
    primerName,
    "Se obtiene la primera letra y la primera consonante",
  );
    clickInstructions(
    apellidoP,
    "Se obtiene la primera letra, la primera vocal y la primera consonante",
  );
    clickInstructions(
    apellidoM,
    "Se obtiene la primera letra y la primera consonante",
  );
  clickInstructions(
    days,
    "Se obtiene los dos dígitos del día",
  );
  clickInstructions(
    months,
    "Se obtiene los dos dígitos del mes",
  );
  clickInstructions(
    years,
    "Se obtiene los dos ultimos dígitos del año y el siglo. ¿Año 2000 en adelante? el siglo es 'A', si no '0'"
  );
  clickInstructions(
    estates,
    "Se obtiene el código del estado seleccionado",
  );



  // eventos para detectar fuera del input
  apellidoP.addEventListener("change", () => {
    curp.digitoOne = apellidoP.value[0].toUpperCase();
    curp.digitoTwo = primeVocal(apellidoP.value, 1, 4);
    curp.digitoConsoApP = primerConsonant(apellidoP.value, 1, 4);
    renderCurpBoxes();
  });
  apellidoM.addEventListener("change", () => {
    curp.digitoTree = apellidoM.value[0].toUpperCase();
    curp.digitoConsoApM = primerConsonant(apellidoM.value, 1, 5);
    renderCurpBoxes();
  });
  primerName.addEventListener("change", () => {
    const nombre = primerName.value[0].toUpperCase();
    curp.digitoFour = nombre;
    curp.digitoConsoName = primerConsonant(primerName.value, 1, 4);
    renderCurpBoxes();
  });
  years.addEventListener("change", () => {
    curp.digitoYear = years.value.slice(2, 4);
    curp.digitoSigle = ObtenerSiglo(years.value);
    renderCurpBoxes();
  });
  months.addEventListener("change", () => {
    curp.digitoMonth = String(months.value).padStart(2, "0");
    renderCurpBoxes();
  });
  days.addEventListener("change", () => {
    days.value = String(days.value).padStart(2, "0");
    curp.digitoDay = days.value;
    renderCurpBoxes();
  });
  estates.addEventListener("change", () => {
    curp.digitoEstate = estates.value;
    renderCurpBoxes();
  });
  genero.addEventListener("click", (e) => {
    if (e.target.id === "H" || e.target.id === "M") {
      curp.digitoGender = e.target.id;
      // manejar el evento click en botones para aplicar opacidad
      const targetH = document.getElementById("H");
      const targetM = document.getElementById("M");

      if (e.target.id === "H") { 
      targetH.classList.add("opacity-100")
      targetM.classList.remove("opacity-100")
    } else if(e.target.id === "M"){
      targetM.classList.add("opacity-100")
      targetH.classList.remove("opacity-100")
    }
      
      renderCurpBoxes();
    } else {
      return;
    }
  });
  btnNumberRand.addEventListener("click", () => {
    curp.digitoEnd = randomNumber(1, 9);
    document.getElementById("digitoEnd").value = curp.digitoEnd;
    renderCurpBoxes();

    // remover para entregar curp
    document.getElementById("finButton").classList.remove("opacity-50");
    document.getElementById("finButton").removeAttribute("disabled");
  });
};
