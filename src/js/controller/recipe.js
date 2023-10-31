import init from './init';
import { ModelRecipe } from '../model/recipe';
import { findPages } from '../model/findPages';
import organizeResults from './organizeResults';
import { renderRecipe } from '../view/renderRecipe';
import { filledBookmark, searchInput } from '../elements';
import renderBookedRecipe from '../view/renderBookedRecipe';
import { bookedRecipes } from '../model/recipe';
import { lastId } from './recipeEvents';
let booked = false;
let lastResult;

export class ControllerRecipe {
  constructor(resultId) {
    this.resultId = resultId;
    this.query = searchInput.value;
    this.modelRecipe = new ModelRecipe();
    this.ids = Object.keys(bookedRecipes);
  }

  // CHECK EMPTY INPUT
  _isEmpty() {
    if (this.query === '') {
      searchInput.classList.add('red-border');
      return true;
    }
  }

  // LOAD ALL RECIPES
  async loadRecipes() {
    if (this._isEmpty()) return;
    init();
    const results = await this.modelRecipe.loadRecipes();
    if (!results) return;
    findPages(results);
    organizeResults(results);
  }

  // LOAD & RENDER SINGLE RECIPE
  async loadRecipe() {
    try {
      if (!this.resultId) return;
      booked = false;
      const recipe = await this.modelRecipe.loadRecipe(this.resultId);
      this._storeLastRecipe(recipe);
      renderRecipe(recipe);
      this.checkBookmark();
    } catch (err) {
      console.log(err);
    }
  }

  // STORE INFO ABOUT LAST CLICKED RECIPE
  _storeLastRecipe(recipe) {
    lastResult = {
      id: recipe.id,
      image_url: recipe.image_url,
      title: recipe.title,
      publisher: recipe.publisher,
      ...(recipe.key ? { key: recipe.key } : {}),
    };
  }

  // CHECK IF THE RECIPE IS ALREADY EXIST IN THE LIST
  checkId = () => this.ids.find((id) => id === lastId);

  checkRecipe() {
    const id = this.checkId();
    if (id) this._unBookeRecipe(id);
    if (!id) this._bookeRecipe(lastId);
    // Render booked recipes
    renderBookedRecipe(bookedRecipes);
  }

  // SHOW BOOKMARK WHEN THE RECIPE ALREADY BOOKED
  checkBookmark() {
    const id = this.checkId();
    if (id) this.toggleRecipeMarking(true);
  }

  // BOOK RECIPE
  _bookeRecipe(id) {
    bookedRecipes[id] = lastResult;
    this.modelRecipe.storeBookedRecipe();
  }

  // UNBOOK RECIPE
  _unBookeRecipe(id) {
    delete bookedRecipes[id];
    this.modelRecipe.storeBookedRecipe();
  }

  // MARK OR UNMARK RECIPE WHEN THE USER CLICK ON THE BOOKMARK BUTTON
  toggleRecipeMarking(show) {
    booked = !booked;
    if (booked || show) filledBookmark.classList.add('show');
    else filledBookmark.classList.remove('show');
  }
}
