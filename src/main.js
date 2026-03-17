import { header } from "./components/header";
import { swiperContent } from "./components/swipersContent";

import { typingEfect } from "./utils/typingEfect";
import { theme } from "./models/theme";

import { calculeCurp } from "./models/curp";
import { clickNext } from "./models/swiper";

import { generarEstados } from "./utils/generateEstados";
import { generarDays } from "./utils/generateDays";
import { generarMonths } from "./utils/generateMonths";
import { generarYears } from "./utils/generateYears";

function insertHtml() {
  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", swiperContent());
}

document.addEventListener("DOMContentLoaded", () => {
  // html inject
  insertHtml();

  // generadores
  generarEstados();
  generarDays();
  generarMonths();
  generarYears();
  //
  typingEfect();

  // modelos
  theme();
  calculeCurp();
  clickNext();
});
