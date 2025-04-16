import { container } from './container.js';

export const breadcrumbs = (parent, data) => {
  const breadcrumbsElem = document.createElement('div');
  breadcrumbsElem.classList.add('breadcrumbs');

  const listItems = data.map(item => `
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="${item.href}">${item.text}</a>
      <span class="breadcrumbs__separator">&gt;</span>
    </li>
  `);

  const child = `
    <nav class="breadcrumbs__nav">
      <ul class="breadcrumbs__list">
        ${listItems}
      </ul>
    </nav>
  `;

  breadcrumbsElem.append(container(child));
  parent.append(breadcrumbsElem);
  return breadcrumbsElem;
};
