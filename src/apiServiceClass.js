import axios from 'axios';

export default class SearchImage {
  constructor() {
    this._query = '';
    this._page = 1;
  }
  searchImageFetch() {
    const key = '20177896-1cf321c1d71fc21c86755b502';
    return axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=40&safesearch=true&key=${key}`,
    )
  }

  get query() {
    return this._query;
  }
  set query(newQuery) {
    this._query = newQuery;
  }
  get page() {
    return this._page;
  }
  set page(newPage) {
    this._page = newPage;
  }
}