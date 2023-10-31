import { currentPage } from '../model/updatePage';
import { paginationLeft } from '../elements';

// SHOW OR HIDE PAGINATION LEFT BUTTON
const toggleVisibility = function () {
  if (currentPage > 1) paginationLeft.classList.add('show');
  else if (currentPage === 1) paginationLeft.classList.remove('show');
};

export default toggleVisibility;
