import Swiper from 'swiper';

const landingSwiper = new Swiper('.home__splash', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  speed: 2000,
  autoplay: true,
  delay: 2500,
  fadeEffect: {
     crossFade: true
   },
  initialSlide: Math.floor(Math.random() * 5)
})

