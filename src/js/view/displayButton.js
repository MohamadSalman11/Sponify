import { pagesNumber } from '../model/findPages';
import { currentPage } from '../model/updatePage';
import { paginationRight } from '../elements';

// SHOW OR HIDE PAGINATION RIGHT BUTTON
export default displayButton = function () {
  if (currentPage < pagesNumber) paginationRight.classList.add('show');
  else paginationRight.classList.remove('show');
};
