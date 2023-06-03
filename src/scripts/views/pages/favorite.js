/* eslint-disable no-plusplus */
import FavoriteStoryIdb from '../../data/favorite-story-idb';
import FavoriteStorySearchView from './favorite-story/favorite-story-search-view';
import FavoriteStorySearchPresenter from './favorite-story/favorite-story-search-presenter';
import FavoriteStoryShowPresenter from './favorite-story/favorite-story-show-presenter';

const view = new FavoriteStorySearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteStoryShowPresenter({ view, favoriteStories: FavoriteStoryIdb });
    new FavoriteStorySearchPresenter({ view, favoriteStories: FavoriteStoryIdb });
  },
};

export default Favorite;
