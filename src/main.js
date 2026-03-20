import { header } from "./components/header";
import { swiperContent } from "./components/swipersContent";
import { theme } from "./models/theme";
import { clickNext } from "./models/initButton";
import { getInputsValues } from "./models/getInputs";
import { generarEstados } from "./utils/generateEstados";
import { changePage } from "./models/changePage";
import { validationsInputs } from "./utils/validationsInputs";
import { cancelTab } from "./utils/cancelTab";
import { initSwiper } from "./utils/swiper"; // ← importar aquí
import { pintLiByPage } from "./utils/pintLiByPage";
import { clickEnd } from "./models/finButton";
import { copyCURP } from "./utils/copyCurp";

function insertHtml() {
  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", swiperContent());
}

document.addEventListener("DOMContentLoaded", () => {
  insertHtml();
  generarEstados();
  theme();
  getInputsValues();
  clickNext();
  
  // no moverlo! 
  const swiper = initSwiper() 
  changePage(swiper)
  pintLiByPage(swiper)

  validationsInputs();
  cancelTab();  

  clickEnd();
  copyCURP();

});