// inicializar swiper
export const initSwiper = () => {
  const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
      renderBullet: (index, className) => {
        return `<span class="${className} dark:border-none border-2">${index + 1}</span>`
      },
    },
  });

  return swiper;
};