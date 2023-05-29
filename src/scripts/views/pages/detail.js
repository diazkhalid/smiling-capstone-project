/* eslint-disable no-plusplus */
import { createStoryDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    console.log('detail');
    return `
    <div id="detail-container" class="container d-flex flex-column gap-5 my-5 px-4 px-sm-0"></div>
      `;
  },

  async afterRender() {
    console.log('after render');
    const container = document.querySelector('#detail-container');

    container.innerHTML = createStoryDetailTemplate();
  },
};

export default Detail;
