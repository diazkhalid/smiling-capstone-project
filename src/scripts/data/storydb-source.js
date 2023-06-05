import API_ENDPOINT from '../globals/api-endpoint';

class StoryDbSource {
  static async getAllStories() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.stories;
  }

  static async detailStory(idStory) {
    const response = await fetch(API_ENDPOINT.DETAIL(idStory));
    return response.json();
  }

  static async searchStories(query) {
    const loweredCaseQuery = query.toLowerCase();
    const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

    try {
      const response = await fetch(API_ENDPOINT.SEARCH(jammedQuery));
      const text = await response.text();
      const data = JSON.parse(text);

      return data;
    } catch (error) { return []; }
  }
}

export default StoryDbSource;
