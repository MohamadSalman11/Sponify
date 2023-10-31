import { updateCurrentPage } from '../model/updatePage';
import renderBookedRecipes from '../view/renderBookedRecipe';
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
const init = function () {
  updateCurrentPage(false);
  resultsList.textContent = '';
  paginationRight.classList.remove('show');
  paginationLeft.classList.remove('show');
  loadingSpinner.classList.add('show');
  paginationRightNr.textContent = 2;
  searchInput.value = '';
};

export default init;

// LOAD BOOKED RECIPES FROM LOCALSTORAGE & RENDER IT
const storedList = new ModelRecipe().loadLocalStorage();
renderBookedRecipes(storedList);
