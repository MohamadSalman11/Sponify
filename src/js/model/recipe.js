/* global localStorage */
import { currentPage } from './updatePage';
import { API, API_KEY } from '../config';
import {
  arrowRight,
  closeBtn,
  form,
  loadingSpinner,
  recipeForeground,
  recipeLoadingSpinner,
  resultsErrMess,
  searchInput,
  uploadErrMess,
  uploadLoadingSpinner,
  uploadSucMess,
  uploadWhiteBg,
} from '../elements';

export const myRecipes = {};
export let bookedRecipes = {};
export let lastRecipe;

export class ModelRecipe {
  constructor() {
    this.currentPage = currentPage;
    this.spinner = recipeLoadingSpinner;
    this.api = `${API}?search=${searchInput.value}&key=${API_KEY}`;
    this.foreGround = recipeForeground;
  }

  // UPLOAD RECIPE
  uploadRecipe() {
    // ingredients & other data(title, publisher...)
    const dataArr = [...new FormData(form)];
    // ingredients(as array)
    const ings = [...dataArr.splice(6, 6)];
    // Keep ings with at least one of quantity, unit, or description
    const validIngs = ings.filter((ing) => ing[1] !== '');
    // return ingredients(as object)
    const newIngs = validIngs.map((ing) => {
      const values = ing[1].split(',');
      return {
        quantity: +values[0] || '',
        unit: values[1] || '',
        description: values[2] || '',
      };
    });
    // Push new Ingredients to other data(title, publisher...)
    dataArr.push(['ingredients', [...newIngs]]);
    // Final result as object
    const recipe = Object.fromEntries(dataArr);
    return recipe;
  }

  async sendJSON(uploadData) {
    try {
      const res = await fetch(`${API}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      });
      uploadLoadingSpinner.classList.add('display-none');
      if (!res.ok) throw new Error('Something went wrong 💥 💥 💥 💥');
      uploadSucMess.classList.add('display-flex');
    } catch (err) {
      console.log(err);
      closeBtn.classList.add('display-none');
      arrowRight.classList.add('display-flex');
      uploadErrMess.classList.add('display-flex');
    }
  }

  // LOAD ALL RECIPES/RESULTS
  async loadRecipes() {
    try {
      const res = await fetch(this.api);
      const { data } = await res.json();
      const { recipes } = data;
      if (!recipes.length) throw new Error();
      return recipes;
    } catch (err) {
      setTimeout(() => {
        loadingSpinner.classList.remove('show');
        resultsErrMess.classList.add('display-flex');
      }, 1500);
    }
  }

  // LOAD SINGLE RECIPE
  async loadRecipe(id) {
    try {
      this.spinner.classList.add('show');
      this.foreGround.classList.remove('hidde');
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
      );
      const data = await res.json();
      const { recipe } = data.data;
      lastRecipe = recipe;
      return recipe;
    } catch (err) {
      console.log(err);
    }
  }

  // STORE BOOKED RECIPE IN THE LOCALSTORAGE
  storeBookedRecipe() {
    localStorage.setItem('bookedRecipes', JSON.stringify(bookedRecipes));
  }

  // LOAD BOOKED RECIPES FROM LOCALSTORAGE
  loadLocalStorage() {
    const storedRecipes =
      JSON.parse(localStorage.getItem('bookedRecipes')) || {};
    bookedRecipes = storedRecipes;
    return bookedRecipes;
  }
}
