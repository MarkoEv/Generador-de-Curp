import { header } from "./components/header";
import { swiperContent } from "./components/swipersContent";

import { initSwiper } from "./utils/swiper";
import { typingEfect } from "./utils/typingEfect";
import { theme } from "./utils/theme";

import { calculeCurp } from "./utils/curp";

import { generarEstados } from "./models/generateEstados";
import { generarDays } from "./models/generateDays";
import { generarMonths } from "./models/generateMonths";
import { generarYears } from "./models/generateYears";

function insertHtml() {
  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", swiperContent());
}

document.addEventListener("DOMContentLoaded", () => {
  insertHtml();
  calculeCurp();

  // generadores
  generarEstados();
  generarDays();
  generarMonths();
  generarYears();

  theme();
  initSwiper();
  typingEfect();
});
