/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable no-plusplus */
import { createStoryItemTemplate, createStoryItemTemplate2 } from '../templates/template-creator';

const Beranda = {
  async render() {
    console.log('render');
    return `
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
