/* eslint-disable no-plusplus */
import UrlParser from '../../routes/url-parser';
import StoryDbSource from '../../data/storydb-source';
import { createStoryDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteStoryIdb from '../../data/favorite-story-idb';
import ReviewInitiator from '../../utils/review-initiator';

const Detail = {
  async render() {
    return `
    <div id="detail-container" class="container d-flex flex-column gap-5 my-5 px-4 px-sm-0"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const story = await StoryDbSource.detailStory(url.id);
    const container = document.querySelector('#detail-container');

    container.innerHTML = createStoryDetailTemplate(story);
    if (story.review.length > 0) {
      const noReviewStatus = document.querySelector('#noReview');
      noReviewStatus.style.display = 'none';
    }

    ReviewInitiator.init({
      storyReviewContainer: document.querySelector('#reviewViewContainer'),
      storyFormReviewContainer: document.querySelector('#reviewFormContainer'),
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteStories: FavoriteStoryIdb,
      story: {
        id: story.id,
        title: story.title,
        description: story.description,
      },
    });
  },
};

export default Detail;
