// variable para que persista entre llamadas
let timeoutId;

// función para establecer texto de instrucciones
// objetivo: inyectar html pero con tipyng effect
export const textInstruction = (text) => {
  const instructions = document.getElementById("instructions");

  //verificar si existe alguna
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  instructions.innerHTML = "";
  let e = 0;

  function escribirIns() {
    if (e < text.length) {
      instructions.innerHTML += text[e];
      e++;
      timeoutId = setTimeout(escribirIns, 1);
    }
  }
  escribirIns();
};
