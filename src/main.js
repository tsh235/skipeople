import 'normalize.css';
import './style.scss';
import { Navigation, Thumbs } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';

const sliderThimbs = new Swiper('.slider-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

new Swiper('.slider-main', {
  spaceBetween: 10,
  modules: [Navigation, Thumbs],
  navigation: {
    nextEl: '.slider__button_next',
    prevEl: '.slider__button_prev',
  },
  thumbs: {
    swiper: sliderThimbs,
  },
});