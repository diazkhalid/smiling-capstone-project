import { createStoryItemTemplate } from '../../views/templates/template-creator';

class StorySearchView {
  runWhenUserIsSearching(callback) {
    document.getElementById('search-input').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showStories(stories = []) {
    let html;
    if (stories.length) {
      html = stories.reduce((carry, story) => carry.concat(createStoryItemTemplate(story)), '');
    } else {
      html = this._getEmptyStoryTemplate();
    }
    document.getElementById('card-container').innerHTML = html;

    document.getElementById('card-container').dispatchEvent(new Event('stories:updated'));
  }

  _getEmptyStoryTemplate() {
    return '<div class="story-item__not__found">Tidak ada cerita untuk ditampilkan</div>';
  }
}

export default StorySearchView;
