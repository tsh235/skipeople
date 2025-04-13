import { localStorageLoad, localStorageSave } from './localStorage.js';

export const addFavorite = async (data) => {
  const favoriteList = localStorageLoad('ski-favorite');
  const list = document.querySelector('.goods__list');
  
  if (list) {
    list.addEventListener('click', ({target}) => {
      const likeBtn = target.closest('.card__like');

      if (likeBtn) {
        const id = Number(likeBtn.dataset.id);
        const item = data.find(item => item.id === id);

        if (favoriteList.length === 0) {
          favoriteList.push(item);
          localStorageSave('ski-favorite', favoriteList);
        } else {
          let thereIs = false;
          favoriteList.forEach((favoritItem, index) => {
            if (favoritItem.id === id) {
              thereIs = true;
              favoriteList.splice(index, 1);
              localStorageSave('ski-favorite', favoriteList);
            }
          });

          if (!thereIs) {
            favoriteList.push(item);
            localStorageSave('ski-favorite', favoriteList);
          }
        }
      }
    });
  }
};