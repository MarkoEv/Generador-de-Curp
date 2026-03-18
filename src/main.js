import { header } from "./components/header";
import { swiperContent } from "./components/swipersContent";
import { typingEfect } from "./utils/typingEfect";
import { theme } from "./models/theme";
import { clickNext } from "./models/swiper";
import { getInputsValues } from "./models/getInputs";
import { generarEstados } from "./utils/generateEstados";

function insertHtml() {
  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", swiperContent());
}

document.addEventListener("DOMContentLoaded", () => {
  // html inject
  insertHtml();

  // generadores
  generarEstados();
  //
  typingEfect();

  // modelos
  theme();
  clickNext();
  getInputsValues();
});
