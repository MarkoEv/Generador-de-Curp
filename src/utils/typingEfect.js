export const typingEfect = () => {
  const text = "Tu CURP";
  let i = 0;

  function escribir() {
    if (i < text.length) {
      document.getElementById("text").textContent += text[i];
      i++;
      setTimeout(escribir, 100);
    }
  }

  const instrucciones = "Presiona el botón";
  let e = 0;
  function escribirIns() {
    if (e < instrucciones.length) {
      document.getElementById("instrucciones").textContent += instrucciones[e];
      e++;
      setTimeout(escribirIns, 50);
    }
  }

  escribir();
  escribirIns();
};
