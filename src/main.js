import { initSwiper } from "./utils/swiper";
import { typingEfect } from "./utils/typingEfect";
import { header } from "./components/header";
import { swiperContent } from "./components/swipersContent";

function insertHtml() {
  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", swiperContent());
}

document.addEventListener("DOMContentLoaded", () => {
  insertHtml();

  initSwiper();
  typingEfect();
});
