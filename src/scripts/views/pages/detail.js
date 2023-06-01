/* eslint-disable no-plusplus */
import UrlParser from '../../routes/url-parser';
import StoryDbSource from '../../data/storydb-source';
import { createStoryDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    console.log('detail');
    return `
    <div id="detail-container" class="container d-flex flex-column gap-5 my-5 px-4 px-sm-0"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const story = await StoryDbSource.detailStory(url.id);
    const container = document.querySelector('#detail-container');

    container.innerHTML = createStoryDetailTemplate(story);
  },
};

export default Detail;
