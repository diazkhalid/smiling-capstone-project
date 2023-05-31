import API_ENDPOINT from '../globals/api-endpoint';

class StoryDbSource {
  static async listAllStory() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailStory(idStory) {
    const response = await fetch(API_ENDPOINT.DETAIL(idStory));
    return response.json();
  }
}

export default StoryDbSource;
