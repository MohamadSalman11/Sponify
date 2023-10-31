// CALCULATING THE NEW QUANTITY
import { lastRecipe } from './recipe';

export default updateServing = function (oldServ, newServ) {
  const newRecipe = lastRecipe.ingredients.map((ing) => {
    const oldQuan = ing.quantity;
    ing.quantity = (oldQuan * newServ) / oldServ;
    return ing;
  });
  return newRecipe;
};
