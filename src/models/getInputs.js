let curp = {
  apellidoPaterno: "",
  apellidoMaterno: "",
  primerNombre: "",
  segundoNombre: "",
};

// funcion para inserta letras en span:id=lyrics
function setLyrics(curp) {
  // obtener valores
  const values = Object.values(curp);
  // quitar la coma
  const quitComa = values.join("");

  const spanLyrics = document.querySelector("#lyrics");
  spanLyrics.innerHTML = quitComa;
}

// funcion para obtener la primer vocal
function primeVocal(cadena) {
  let vocales = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/);
  const resultado = vocales[0].toUpperCase();
  return resultado;
}
export const getInputsValues = () => {
  const apellidoP = document.getElementById("apellidoP");
  const apellidoM = document.getElementById("apellidoM");
  const primerName = document.getElementById("primerName");
  const segundoName = document.getElementById("segundoName");
  const days = document.getElementById("days");
  const months = document.getElementById("months");
  const years = document.getElementById("years");
  const estates = document.getElementById("estates");
  const genero = document.getElementById("genero");

  apellidoP.addEventListener("change", () => {
    curp.apellidoPaterno = primeVocal(apellidoP.value);
    setLyrics(curp);
  });
  apellidoM.addEventListener("change", () => {
    curp.apellidoMaterno = primeVocal(apellidoM.value);
    setLyrics(curp);
  });
  primerName.addEventListener("change", () => {
    curp.primerNombre = primeVocal(primerName.value);
    setLyrics(curp);
  });
  segundoName.addEventListener("change", () => {
    curp.segundoNombre = primeVocal(segundoName.value);
    setLyrics(curp);
  });
};
