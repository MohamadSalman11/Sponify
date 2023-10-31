import { ControllerRecipe } from './recipe';
import { ModelRecipe } from '../model/recipe';

import {
  form,
  searchInput,
  bookmarkBtn,
  resultsErrMess,
  uploadWhiteBg,
  startMessage,
} from '../elements';
export let lastId;

//  LOADING SINGLE OR ALL RECIPES
document.addEventListener('click', (e) => {
  const element = e.target;
  const resultId = element?.closest('li')?.dataset.result__id;
  const isSearchBtn = element?.closest('.search__btn');
  checkRecipe(resultId, isSearchBtn);
});

// CHECK IF SINGLRE OR ALL RECIPES SHOULD BE LOADED
const checkRecipe = (resultId, isSearchBtn) => {
  if (isSearchBtn) {
    resultsErrMess.classList.remove('display-flex');
    new ControllerRecipe().loadRecipes();
  }
  if (resultId) {
    startMessage.classList.add('display-none');
    lastId = resultId;
    new ControllerRecipe(resultId).loadRecipe();
  }
};

// SUPPORT ALSO THE ENTER KEYWORD FOR LOAD RESULTS/RECIPE
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    resultsErrMess.classList.remove('display-flex');
    new ControllerRecipe().loadRecipes();
  }
});

// UPLOAD RECIPE
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // show loading functionallty
  uploadWhiteBg.classList.add('show');
  // upload recipe
  setTimeout(() => {
    const recipeModel = new ModelRecipe();
    const uploadData = recipeModel.uploadRecipe();
    recipeModel.sendJSON(uploadData);
  }, 1000);
});

// REMOVE THE RED BORDER AFTER EMPTY QUERY
searchInput.addEventListener('input', () =>
  searchInput.classList.remove('red-border'),
);

// CHECK IF RECIPE ALREADY EXIST IN THE LIST & TOGGLE RECIPE MARKING
bookmarkBtn.addEventListener('click', () => {
  const ctrRecipe = new ControllerRecipe();
  ctrRecipe.toggleRecipeMarking();
  ctrRecipe.checkRecipe();
});
