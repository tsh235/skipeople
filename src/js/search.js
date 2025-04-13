import {main} from '../componens/main.js';
import {router} from './router.js';

export const search = () => {
  
  const searchForm = document.querySelector('.header__search');
  const searchInput = document.querySelector('.header__input');
  
  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      main().textContent = '';
      router.navigate(`/search/?query=${searchInput.value}`);
      searchForm.reset();
    });
  } 
};