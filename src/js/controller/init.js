import { currentPage, updateCurrentPage } from '../model/updatePage';
import renderBookedRecipe from '../view/renderBookedRecipe';
import { ModelRecipe } from '../model/recipe';
import {
  paginationRight,
  paginationLeft,
  resultsList,
  loadingSpinner,
  searchInput,
  paginationRightNr,
} from '../elements';

// SET THE APPLICATION TO DEFAULT
export default init = function () {
  updateCurrentPage(false);
  resultsList.textContent = '';
  paginationRight.classList.remove('show');
  paginationLeft.classList.remove('show');
  loadingSpinner.classList.add('show');
  currentPage = 1;
  paginationRightNr.textContent = 2;
  searchInput.value = '';
};

// LOAD BOOKED RECIPES FROM LOCALSTORAGE & RENDER IT
const storedList = new ModelRecipe().loadLocalStorage();
renderBookedRecipe(storedList);
