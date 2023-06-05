import CONFIG from './config';

const { BASE_URL, BASE_IMAGE_URL, BASE_THUMBNAIL_URL } = CONFIG;
const API_ENDPOINT = {
  LIST: `${BASE_URL}list`,
  DETAIL: (id) => `${BASE_URL}detail/${id}`,
  SEARCH: (keyword) => `${BASE_URL}story/search?title=${keyword}`,
  IMAGE_STORY: (storyId, imageId) => `${BASE_IMAGE_URL}/${storyId}/${imageId}`,
  IMAGE_THUMBNAIL: (thumbId) => `${BASE_THUMBNAIL_URL}/${thumbId}`,
};

export default API_ENDPOINT;
