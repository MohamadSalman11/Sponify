import renderResults from '../view/renderResults';
import displayButton from '../view/displayButton';
import { organize } from '../model/organizeRes';

// ORGANIZING RESULTS FOR EACH PAGE (E.G: Pages = { page1: [result-1, result-2], page2: [result-1]... })
export default organizeResults = function (results) {
  organize(results);
  renderResults();
  displayButton();
};
