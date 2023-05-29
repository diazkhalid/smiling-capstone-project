/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable no-plusplus */
import { createStoryItemTemplate, createStoryItemTemplate2 } from '../templates/template-creator';

const Beranda = {
  async render() {
    console.log('render');
    return `
      <div class="hero" id="hero">
          <picture class="hero__img">
            <source media="(max-width: 717px)" srcset="./hero_img-xs.jpg" />
            <source media="(max-width: 1110px)" srcset="./hero_img-s.jpg" />
            <img
              src="./hero_img.jpg"
              alt="restaurant hero image"
              class="img-fluid"
            />
          </picture>
          <div
            class="hero__img position-absolute"
            id="dark-filter"
            style="background-color: rgba(0, 0, 0, 0.485)"
          ></div>
          <div class="hero__content">
            <h2 class="hero__title">Melangkah Ke Dunia Imajinasi</h2>
            <p class="hero__description">
              Aktivitas bonding membaca bersama anak, jendela menuju petualangan.
            </p>
          </div>
      </div>
      <!-- height di set ke 100% untuk menguji apakah drawer akan menutup jika main di klik -->
      <div class="container mt-5 rounded">
          <div class="row" id="card-container"></div>
      </div>
    `;
  },

  async afterRender() {
    console.log('after render');
    const container = document.querySelector('#card-container');
    for (let i = 0; i < 12; i++) {
      if (i % 2 === 0) {
        container.innerHTML += createStoryItemTemplate();
      } else {
        // untuk tes overflow deskripsi
        container.innerHTML += createStoryItemTemplate2();
      }
    }
  },
};

export default Beranda;
