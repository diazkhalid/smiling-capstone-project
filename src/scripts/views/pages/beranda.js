/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable no-plusplus */
import StoryDbSource from '../../data/storydb-source';
import StorySearchView from '../../utils/story-presenter/story-search-view';
import StorySearchPresenter from '../../utils/story-presenter/story-search-presenter';
import StoryShowPresenter from '../../utils/story-presenter/story-show-presenter';

const view = new StorySearchView();

const Beranda = {
  async render() {
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
      <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-md-7">
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
      <!-- height di set ke 100% untuk menguji apakah drawer akan menutup jika main di klik -->
      <div class="container mt-5 rounded">
          <div class="row" id="card-container"></div>
      </div>
    `;
  },

  async afterRender() {
    new StoryShowPresenter({ view, stories: StoryDbSource });
    new StorySearchPresenter({ view, stories: StoryDbSource });
  },
};

export default Beranda;
