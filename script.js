// Inicializar el slider Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,  // Hace que el slider sea infinito
  autoplay: {
      delay: 3000, // Cambia de imagen cada 3 segundos
      disableOnInteraction: false, 
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

// Inicializar el slider Swiper en la cabecera
var headerSwiper = new Swiper(".header__slider", { 
    loop: true,  // Hace que el slider sea infinito
    autoplay: {
        delay: 3000, // Cambia de imagen cada 3 segundos
        disableOnInteraction: false, 
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });
  
