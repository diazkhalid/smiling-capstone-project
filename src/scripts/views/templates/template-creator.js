/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import API_ENDPOINT from '../../globals/api-endpoint';
import DetailHelper from '../../utils/detail-helper';

const createStoryItemTemplate = (story) => `
    <div class="col-md-6 col-lg-4 mt-2 mb-2">
        <div class="card shadow-card rad-card">
            <div class="overflow-hidden m-0" id="divImgCard">
                <img id="img-item" class="img-fluid" src="${API_ENDPOINT.IMAGE_THUMBNAIL(story.id)}" alt="" crossorigin="anonymouse">
            </div>
            <div class="card-body text-center overflow-hidden" id="body-card">
                <h3 class="card-title"><a href="/#/detail/${story.id}">${story.title}</a></h3>
                <p>${story.description}</p>
            </div>
        </div>
    </div>
`;

const createStoryDetailTemplate = (story) => `
    <div class="row">
        <div class="col">
            <h2>${story.title}</h2>
        </div>
    </div>
    <div class="row gap-5 gap-md-0">
        <div class="col-md-6 pe-md-4">
        <img class="img-fluid" src="${API_ENDPOINT.IMAGE_THUMBNAIL(story.id)}" alt="" width="100%" />
        </div>
        <div class="col-md-6 ps-md-4">
        <h3>Detail Cerita</h3>
        <table class="table table-borderless table-responsive mt-3">
            <tr>
            <td>Penulis</td>
            <td>:</td>
            <td>${story.writer}</td>
            </tr>
            <tr>
            <td>Ilustrator</td>
            <td>:</td>
            <td>${story.illustrator}</td>
            </tr>
            <tr>
            <td>Penerbit</td>
            <td>:</td>
            <td>${story.publisher}</td>
            </tr>
            <tr>
            <td>Url asli</td>
            <td>:</td>
            <td>
                <a
                href="${story.originalUrl}"
                target="blank">Storyweaver.org.in</a
                >
            </td>
            </tr>
            <tr>
            <td>Musik</td>
            <td>:</td>
            <td>${story.musicInfo}</td>
            </tr>
            <tr>
            <td>Hak cipta</td>
            <td>:</td>
            <td>${story.copyright}</td>
            </tr>
        </table>
        </div>
    </div>
    <div class="row justify-content-center my-3 sticky-top">
        ${DetailHelper.playerMusic(story)}
    </div>
    <div class="row">
        <div class="col">
            ${DetailHelper.eachContent(story)}
        </div>
    </div>
`;

const createMusicPlayerTemplate = (path) => `
    <div class="col-11 col-md-6 player p-0">
        <audio controls loop preload="none">
            <source src="${path}" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
`;

const createContentTemplate = (content, storyId) => `
    <div class="row d-flex flex-column align-items-center gap-4 mt-4">
        <div class="col text-center mb-2">
            <img
                class="img-fluid story-picture"
                src="${API_ENDPOINT.IMAGE_STORY(storyId, content.pictureId)}"
                alt=""
            />
        </div>
        <div class="col col-xl-9 text-justify">
            <p>
                ${content.story}
            </p>
        </div>
    </div>
`;

const createLikeStoryButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createUnlikeStoryButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createStoryItemTemplate,
  createStoryDetailTemplate,
  createMusicPlayerTemplate,
  createContentTemplate,
  createLikeStoryButtonTemplate,
  createUnlikeStoryButtonTemplate,
};
