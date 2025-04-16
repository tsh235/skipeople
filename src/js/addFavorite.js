import { localStorageLoad, localStorageSave } from './localStorage.js';

export const addFavorite = async (data, selector) => {
  console.log('data: ', data);
  const favoriteList = localStorageLoad('ski-favorite');
  const list = document.querySelector(selector);
  
  if (list) {
    list.addEventListener('click', ({target}) => {
      const likeBtn = target.closest('.like');

      if (likeBtn) {
        const id = Number(likeBtn.dataset.id);

        let item = '';
        if (Array.isArray(data)) {
          item = data.find(item => item.id === id);
        } else if (typeof data === 'object') {
          item = data;
        }

        console.log('item: ', item);

        if (favoriteList.length === 0) {
          favoriteList.push(item);
          localStorageSave('ski-favorite', favoriteList);
          likeBtn.classList.add('like_active');
        } else {
          let thereIs = false;
          favoriteList.forEach((favoritItem, index) => {
            if (favoritItem.id === id) {
              thereIs = true;
              favoriteList.splice(index, 1);
              localStorageSave('ski-favorite', favoriteList);
              likeBtn.classList.remove('like_active');
            }
          });

          if (!thereIs) {
            favoriteList.push(item);
            localStorageSave('ski-favorite', favoriteList);
            likeBtn.classList.add('like_active');
          }
        }
      }
    });
  }
};