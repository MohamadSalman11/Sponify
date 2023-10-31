// FIND HOW MANY PAGES IT'S GONNA BE CREATED FROM THE RESULTS
export let pagesNumber;
export const findPages = (results) => {
  const resultsNr = results.length;
  pagesNumber = resultsNr <= 10 ? 1 : Math.ceil(resultsNr / 10);
};
