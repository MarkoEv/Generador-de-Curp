export const initSwiper = () => {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          " " +
          "border-2" +
          ' ">' +
          (index + 1) +
          "</span>"
        );
      },
    },
  });
};
