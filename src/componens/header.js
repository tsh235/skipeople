import { container } from './container.js';

// let rendered = false;

export const header = () => {
  // if (rendered) {
  //   return '';
  // }
  
  const headerElem = document.createElement('header');
  headerElem.classList.add('header');

  const child = `
    <a class="header__logo-link" href="/" aria-label="Переход на главную страницу">
      <img class="header__logo" src="/img/logo.svg" alt="логотип skipeople" width="130" height="28">
    </a>

    <form class="header__search">
      <input class="header__input" type="search" name="search" placeholder="Введите запрос">
      <button class="header__btn" type="submit" aria-label="Поиск по сайту">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.66634 14C11.1641 14 13.9997 11.1645 13.9997 7.66671C13.9997 4.1689 11.1641 1.33337 7.66634 1.33337C4.16854 1.33337 1.33301 4.1689 1.33301 7.66671C1.33301 11.1645 4.16854 14 7.66634 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.6663 14.6667L13.333 13.3334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>              
      </button>
    </form>

    <nav class="header__links">
      <a class="header__link" href="/favorite">
        <span class="header__link-text">Избранное</span>
        <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <a class="header__link" href="/cart">
        <span class="header__link-text">Корзина</span>
        <span class="header__count">(5)</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.87329 1.33337L3.45996 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.1265 1.33337L12.5398 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.3335 5.23336C1.3335 4.00002 1.9935 3.90002 2.8135 3.90002H13.1868C14.0068 3.90002 14.6668 4.00002 14.6668 5.23336C14.6668 6.66669 14.0068 6.56669 13.1868 6.56669H2.8135C1.9935 6.56669 1.3335 6.66669 1.3335 5.23336Z" stroke="#1C1C1C"/>
          <path d="M6.50684 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round"/>
          <path d="M9.57324 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round"/>
          <path d="M2.3335 6.66663L3.2735 12.4266C3.48683 13.72 4.00016 14.6666 5.90683 14.6666H9.92683C12.0002 14.6666 12.3068 13.76 12.5468 12.5066L13.6668 6.66663" stroke="#1C1C1C" stroke-linecap="round"/>
        </svg>                         
      </a>
    </nav>
  `;

  headerElem.append(container(child, 'header__container'));

  // document.body.append(headerElem);

  // rendered = true;
  return headerElem;
};
