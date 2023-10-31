import { bookmarkEmpMess, elBookedList } from '../elements';
import { renderRecipeList } from '../helper';
// RENDER THE BOOKED RECIPES IN THE LIST
export default renderBookedRecipes = function (list) {
  elBookedList.innerHTML = '';
  const data = Object.values(list);
  renderRecipeList(data, elBookedList, 25);
  // hidde or show empty message
  if (!data.length) bookmarkEmpMess.classList.remove('display-none');
  else bookmarkEmpMess.classList.add('display-none');
};
