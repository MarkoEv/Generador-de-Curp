let curp = {
  digitoOne: "",
  digitoTwo: "",
  digitoTree: "",
  digitoFour: "",
  digitoYear: "",
  digitoMonth: "",
  digitoDay: "",
};

// funcion para inserta letras en span:id=lyrics
function setLyrics() {
  // obtener valores
  const values = Object.values(curp);
  // quitar la coma
  const quitComa = values.join("");
  const spanLyrics = document.querySelector("#lyrics");
  spanLyrics.innerHTML = quitComa;
}

// funcion para obtener la primer vocal del apeelido paterno
function primeVocal(cadena, min, max) {
  const subtraccion = cadena.substring(min, max);
  const vocal = subtraccion.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/);
  const resultado = vocal[0].toUpperCase();
  return resultado;
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
  return consonantes ? consonantes[0] : "";
}

// extraer los values de los inputs
export const getInputsValues = () => {
  const apellidoP = document.getElementById("apellidoP");
  const apellidoM = document.getElementById("apellidoM");
  const primerName = document.getElementById("primerName");
  const years = document.getElementById("years");
  const segundoName = document.getElementById("segundoName");
  const days = document.getElementById("days");
  const months = document.getElementById("months");
  const estates = document.getElementById("estates");
  const genero = document.getElementById("genero");

  // input del apellido paterno
  apellidoP.addEventListener("change", () => {
    curp.digitoOne = apellidoP.value[0];
    curp.digitoTwo = primeVocal(apellidoP.value, 1, 3);
    setLyrics();
  });
  apellidoM.addEventListener("change", () => {
    curp.digitoTree = apellidoM.value[0];
    setLyrics();
  });
  primerName.addEventListener("change", () => {
    curp.digitoFour = primerName.value[0];
    setLyrics();
  });
  years.addEventListener("change", () => {
    curp.digitoYear = years.value.slice(2, 4);
    setLyrics();
  });
};
