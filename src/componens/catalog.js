import { container } from './container.js';

let rendered = false;

export const catalog = (parent, data = []) => {

  if (rendered) {
    return document.querySelector('.catalog');
  }

  let typeList = [];
  data.map(({type}) => typeList.push(type));

  let catalogItems = '';
  [...new Set(typeList)].forEach(item => {
    catalogItems += `
      <li class="catalog__item">
        <button class="catalog__link">${item}</button>
      </li>
    `;
  });

  const catalogElem = document.createElement('nav');
  catalogElem.classList.add('catalog');

  const child = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <button class="catalog__link catalog__link_active">Все</button>
      </li>
      ${catalogItems}
    </ul>
  `;

  catalogElem.append(container(child));
  parent.append(catalogElem);

  rendered = true;

  return catalogElem;
};
