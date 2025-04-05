import { container } from './container.js';

export const breadcrumbs = () => {
  const breadcrumbsElem = document.createElement('div');
  breadcrumbsElem.classList.add('breadcrumbs');

  const child = `
    <nav class="breadcrumbs__nav">
      <ul class="breadcrumbs__list">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#!">Главная</a>
          <span class="breadcrumbs__separator">&gt;</span>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#!">Лыжи</a>
          <span class="breadcrumbs__separator">&gt;</span>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#!">Горные лыжи</a>
        </li>
      </ul>
    </nav>
  `;

  breadcrumbsElem.append(container(child));
  return breadcrumbsElem;
};
