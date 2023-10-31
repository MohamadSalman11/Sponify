import { resultsList, loadingSpinner } from '../elements';
import { Pages } from '../model/organizeRes';
import { currentPage } from '../model/updatePage';
import { renderRecipeList } from '../helper';

// RENDER THE RESULTS
export default renderResults = function () {
  resultsList.innerHTML = '';
  loadingSpinner.classList.remove('show');
  const newResults = Pages[currentPage];
  renderRecipeList(newResults, resultsList, 20);
};
