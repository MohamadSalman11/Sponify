import { pagesNumber } from './findPages';
// ORGANIZING RESULTS FOR EACH PAGE (E.G: Pages = { page1: [result-1, result-2], page2: [result-1]... })
export let Pages;
export const organize = function (results) {
  Pages = {};
  for (let i = 1; i <= pagesNumber; i += 1) {
    if (i === pagesNumber) Pages[i] = results;
    else Pages[i] = results.splice(0, 10);
  }
};
