export const typingEfect = () => {
  const text = "Tu CURP";
  let i = 0;

  function escribir() {
    if (i < text.length) {
      document.getElementById("text").textContent += text[i];
      i++;
      setTimeout(escribir, 200);
    }
  }
  escribir();
};
