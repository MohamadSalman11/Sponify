import { resultsList, loadingSpinner } from '../elements';
import { Pages } from '../model/organizeRes';
import { currentPage } from '../model/updatePage';
import { renderRecipeList } from '../helper';

// RENDER THE RESULTS
const renderResults = function () {
  resultsList.innerHTML = '';
  loadingSpinner.classList.remove('show');
  const newResults = Pages[currentPage];
  renderRecipeList(newResults, resultsList, 20);
};

export default renderResults;
