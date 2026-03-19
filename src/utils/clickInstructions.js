import { textInstruction } from "./instructions";
// manejar los inputs para los eventos de click y el texto insertado
// objetivo: recibir input y text para enviarlos a textInstructions
export const clickInstructions = (input = null, text) => {
  input.addEventListener("click", () => {
    textInstruction(text);
  });
};
