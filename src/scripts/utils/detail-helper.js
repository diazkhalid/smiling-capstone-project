/* eslint-disable import/named */
/* eslint-disable radix */
/* eslint-disable import/no-cycle */
import {
  createContentTemplate,
  createMusicPlayerTemplate,
} from '../views/templates/template-creator';

const DetailHelper = {
  eachContent({ content, id }) {
    let contentString = '';
    content.forEach((item) => {
      contentString += createContentTemplate(item, id);
    });
    return contentString;
  },

  playerMusic(story) {
    let musicPlayerString = '';
    let srcString = '';
    srcString = `./${story.musicId}.mp3`;
    musicPlayerString += createMusicPlayerTemplate(srcString);
    return musicPlayerString;
  },
};

export default DetailHelper;
