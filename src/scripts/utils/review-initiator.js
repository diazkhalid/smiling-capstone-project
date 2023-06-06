/* eslint-disable no-alert */
import Swal from 'sweetalert2';
import StoryDbSource from '../data/storydb-source';
import UrlParser from '../routes/url-parser';
import DateHelper from './date-helper';
import { createReviewViewTemplate, createReviewFormTemplate } from '../views/templates/template-creator';

const ReviewInitiator = {
  init({ storyReviewContainer, storyFormReviewContainer }) {
    this._storyReviewContainer = storyReviewContainer;
    this._storyFormReviewContainer = storyFormReviewContainer;
    this._renderForm();
  },

  _renderForm() {
    this._storyFormReviewContainer.innerHTML = createReviewFormTemplate();
    this._isFormSubmitted();
  },

  _isFormSubmitted() {
    const reviewFormElement = document.querySelector('#reviewForm');

    reviewFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');

      this._makeRequest({
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      });
    });
  },

  async _makeRequest({ id, name, review }) {
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const responseJSON = await StoryDbSource.addCustomerReview({ id, name, review });
    const DATE = new Date().toISOString();
    const date = new Date(DATE);

    if (await responseJSON.status === 'success') {
      this._storyReviewContainer.innerHTML += createReviewViewTemplate({
        id,
        name,
        review,
        date: `${date.getDate()} ${DateHelper.monthNameChecker(date.getMonth() + 1)} ${date.getFullYear()}`,
      });
      const noReviewStatus = document.querySelector('#noReview');
      noReviewStatus.style.display = 'none';
      inputName.value = '';
      inputReview.value = '';

      Swal.fire('Berhasil!', 'Review berhasil ditambahkan!', 'success');
    } else {
      Swal.fire('Gagal!', await responseJSON.message, 'error');
    }
  },
};

export default ReviewInitiator;