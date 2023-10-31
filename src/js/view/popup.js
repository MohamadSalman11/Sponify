import {
  arrowRight,
  closeBtn,
  popup,
  uploadErrMess,
  uploadInputs,
  uploadLoadingSpinner,
  uploadSucMess,
  uploadWhiteBg,
} from '../elements';

// SET UPLOAD POPUP TO INITIAL STATE
export const defaultState = function () {
  uploadWhiteBg.classList.remove('show');
  uploadErrMess.classList.remove('display-flex');
  uploadSucMess.classList.remove('display-flex');
  uploadLoadingSpinner.classList.remove('display-none');
  closeBtn.classList.remove('display-none');
  arrowRight.classList.remove('display-flex');
};

// SHOW OR HIDE UPLOAD RECIPE POPUP
export const displayPopup = function () {
  popup.classList.add('display-flex');
  setTimeout(() => {
    popup.classList.add('show');
    defaultState();
  }, 0);
};
export const hidePopup = function () {
  popup.classList.remove('show');
  setTimeout(() => {
    popup.classList.remove('display-flex');
    // Clear all upload inputs
    uploadInputs.forEach((inp) => (inp.value = ''));
    defaultState();
  }, 300);
};
