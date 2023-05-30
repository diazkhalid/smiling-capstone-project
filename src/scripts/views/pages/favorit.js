/* eslint-disable no-plusplus */
import { createStoryItemTemplate, createStoryItemTemplate2 } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
        <h2 class="m-5">Buku Favorit</h2>
        <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-5">
                <div class="input-group shadow-search">
                    <span class="input-group-prepend ">
                        <span class="input-group-text bg-white round-l-search" style="height: 100%">
                            <i class="fas fa-search"></i>
                        </span>
                    </span>
                    <input type="text" class="form-control round-r-search" id="search-input" placeholder="Cari">
                  </div>
                </div>
            </div>
        </div>
        <div class="container mt-5 rounded">
          <div class="row" id="card-container"></div>
        </div>
        `;
  },

  async afterRender() {
    console.log('after render');
    const container = document.querySelector('#card-container');
    for (let i = 0; i < 6; i++) {
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
