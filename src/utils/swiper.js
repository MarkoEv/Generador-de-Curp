// inicializar swiper
export const initSwiper = () => {
  const swiper = new Swiper(".mySwiper", {
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} dark:border-none border-2">${index + 1}</span>`
      },
    },
  });

  return swiper;
};