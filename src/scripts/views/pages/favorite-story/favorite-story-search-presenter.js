class FavoriteStorySearchPresenter {
  constructor({ favoriteStories, view }) {
    this._view = view;
    this._favoriteStories = favoriteStories;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchStories(latestQuery);
    });
  }

  async _searchStories(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundStories;
    if (this.latestQuery.length > 0) {
      foundStories = await this._favoriteStories.searchStories(this.latestQuery);
    } else {
      foundStories = await this._favoriteStories.getAllStories();
    }

    this._showFoundStories(foundStories);
  }

  _showFoundStories(stories) {
    this._view.showFavoriteStories(stories);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteStorySearchPresenter;
