import {
  paginationLeft,
  paginationRight,
  paginationRightNr,
  paginationLeftNr,
} from '../elements';
import { currentPage, updateCurrentPage } from '../model/updatePage';
import toggleVisibility from '../view/toggleVisibility';
import renderResults from '../view/renderResults';
import displayButton from '../view/displayButton';

// UPDATE PAGINATION BUTTON NUMBERS
const updatePaginationNr = function () {
  updateCurrentPage(this);
  paginationRightNr.textContent = currentPage + 1;
  paginationLeftNr.textContent = currentPage - 1 === 0 ? 1 : currentPage - 1;
  toggleVisibility();
  renderResults();
  displayButton();
};

// CLICK EVENT LISTENERS
[paginationLeft, paginationRight].forEach((el) =>
  el.addEventListener('click', updatePaginationNr),
);
