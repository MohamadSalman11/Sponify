import { elServingNr } from '../elements';
import updateServing from '../model/updateServing';
import { renderIngredients } from '../view/renderRecipe';
// INCREASE OR DECREASE SERVINGS NUMBER & RENDER NEW QUANTITY
document.addEventListener('click', (e) => {
  const { className } = e.target;
  if (className === 'plus' || className === 'minus') {
    const oldServ = +elServingNr.textContent;
    if (oldServ === 1 && className === 'minus') return;
    const newServ = className === 'plus' ? oldServ + 1 : oldServ - 1;
    elServingNr.textContent = newServ;
    renderIngredients(updateServing(oldServ, newServ));
  }
});
