import { addRecipe, arrowRight, closeBtn, popup } from '../elements';
import { defaultState, displayPopup, hidePopup } from '../view/popup';
// HIDE OR SHOW POPUP
addRecipe.addEventListener('click', displayPopup);
closeBtn.addEventListener('click', hidePopup);
arrowRight.addEventListener('click', defaultState);

popup.addEventListener('click', (e) => {
  const wantHide = Array.from(e.target.classList)?.includes('blur__background');
  if (wantHide) hidePopup();
});
