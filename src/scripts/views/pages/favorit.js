/* eslint-disable no-plusplus */
import { createStoryItemTemplate, createStoryItemTemplate2 } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
        <h2 class="m-5">Buku Favorit</h2>
        <div class="container mt-5 rounded">
          <div class="row" id="card-container"></div>
        </div>
        `;
  },

  async afterRender() {
    console.log('after render');
    const container = document.querySelector('#card-container');
    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        container.innerHTML += createStoryItemTemplate();
      } else {
        // untuk tes overflow deskripsi
        container.innerHTML += createStoryItemTemplate2();
      }
    }

    // const stories = await FavoriteStoryIdb.getAllStories();
    // const storyContainer = document.querySelector('#storyList');

    // stories.forEach((story) => {
    //   storyContainer.innerHTML += createStoryItemTemplate(story);
    // }); untuk nanti kalo udah ada Idb
  },

};

export default Favorit;
