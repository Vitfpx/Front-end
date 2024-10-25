import { mark } from 'regenerator-runtime';
import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parsel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    let markup = ``;
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1)
      return (markup = this._generateButtons(curPage, 'next'));

    // Last page
    if (curPage === numPages && numPages > 1)
      return (markup = this._generateButtons(curPage, 'prev'));

    // Other page
    if (curPage < numPages) {
      markup += this._generateButtons(curPage, 'prev');
      return (markup += this._generateButtons(curPage, 'next'));
    }

    // Page 1, and there are NO other pages
    return markup;
  }

  _generateButtons(curPage, direction) {
    const isNext = direction === 'next';
    const pageNumber = isNext ? curPage + 1 : curPage - 1;
    const buttonClass = isNext
      ? 'pagination__btn--next'
      : 'pagination__btn--prev';
    const iconType = isNext ? `icon-arrow-right` : `icon-arrow-left`;

    return `
        <button data-goto="${pageNumber}" class="btn--inline ${buttonClass}">
          ${
            direction === 'prev'
              ? `
              <svg class="search__icon">
                <use href="${icons}#${iconType}"></use>
              </svg>`
              : ''
          }
          <span>Page ${pageNumber}</span>
          ${
            direction === 'next'
              ? `
              <svg class="search__icon">
                <use href="${icons}#${iconType}"></use>
              </svg>`
              : ''
          }
        </button>
        `;
  }
}

export default new PaginationView();
