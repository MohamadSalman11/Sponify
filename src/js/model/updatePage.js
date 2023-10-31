export let currentPage = 1;

// UPDATE THE NUMBER OF CURRENT PAGE
export const updateCurrentPage = (element) => {
  const direction = element.dataset?.pagination;
  if (!element) currentPage = 1;
  if (direction === 'right') currentPage += 1;
  if (direction === 'left') currentPage -= 1;
};
