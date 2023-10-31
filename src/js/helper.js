import personIcon from '../images/icons/person.png';

export const renderRecipeList = function (results, listElement, index) {
  results.forEach((result) => {
    const { title } = result;
    const html = `<li class="result" data-result__id="${result.id}">
                               <img class="result__img" src="${
                                 result.image_url
                               }" alt="food picture" />
                               <div class="result__basicInfos">
                                <h1 class="result__title">${
                                  title.length >= index
                                    ? `${title.slice(0, index)}...`
                                    : title
                                }</h1>
                                <span class="result__person__ctn">
                               <sub class="result__subTitle">${
                                 result.publisher
                               }</sub>
                             ${
                               result.key
                                 ? `  <span class="result__person">
                             <img src='${personIcon}' alt="user icon" />
                             </span>`
                                 : ''
                             }
                               </span>
                              </div>
                                    </li>`;
    listElement.innerHTML += html;
  });
};
