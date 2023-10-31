import fracty from 'fracty';
import {
  recipeImg,
  cookingTime,
  elServingNr,
  recipeTitle,
  recipeDirection,
  ingredientsList,
  recipeForeground,
  filledBookmark,
  recipePerson,
} from '../elements';
import checkMarkIcon from '../../images/icons/checkmark.png';

// RENDER THE INGREDIENTS
export const renderIngredients = function (recipe) {
  ingredientsList.innerHTML = '';
  recipe.forEach((ingredient) => {
    const { quantity } = ingredient;
    const newQuantity = quantity ? fracty(ingredient.quantity) : '';
    const html = `<li class="recipe__ingredient">
      <img src="${checkMarkIcon}" alt="checkmark" />
      <div>
        <span class="recipe__quantity">${newQuantity}</span>
        <span class="recipe__unit">${ingredient.unit}</span>
        <span class="recipe__description">${ingredient.description}</span>
      </div>
    </li>`;
    ingredientsList.innerHTML += html;
  });
};

// RENDER THE RECIPE
export const renderRecipe = function (recipe) {
  recipeImg.style.backgroundImage = `url(${recipe.image_url})`;
  cookingTime.textContent = recipe.cooking_time;
  elServingNr.textContent = recipe.servings;
  recipeTitle.textContent = recipe.title;
  recipeDirection.href = recipe.source_url;
  renderIngredients(recipe.ingredients);
  filledBookmark.classList.remove('show');
  recipeForeground.classList.add('hidde');
  if (recipe.key) recipePerson.classList.add('display-flex');
  else recipePerson.classList.remove('display-flex');
};
