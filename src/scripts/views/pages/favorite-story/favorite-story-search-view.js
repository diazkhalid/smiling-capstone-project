import { createStoryItemTemplate } from '../../templates/template-creator';

class FavoriteStorySearchView {
  getTemplate() {
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
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('search-input').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteStories(stories = []) {
    let html;
    if (stories.length) {
      html = stories.reduce((carry, story) => carry.concat(createStoryItemTemplate(story)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('card-container').innerHTML = html;

    document.getElementById('card-container').dispatchEvent(new Event('stories:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="story-item__not__found">Tidak ada cerita untuk ditampilkan</div>';
  }
}

export default FavoriteStorySearchView;
