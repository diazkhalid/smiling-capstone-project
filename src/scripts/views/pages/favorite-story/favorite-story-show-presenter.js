class FavoriteStoryShowPresenter {
  constructor({ view, favoriteStories }) {
    this._view = view;
    this._favoriteStories = favoriteStories;

    this._showFavoriteStories();
  }

  async _showFavoriteStories() {
    const stories = await this._favoriteStories.getAllStories();
    this._displayStories(stories);
  }

  _displayStories(stories) {
    this._view.showFavoriteStories(stories);
  }
}

export default FavoriteStoryShowPresenter;
