export const paginationCount = (maxCount) => {
  const btns = document.querySelectorAll('.pagination__btn');

  let currentCount = 0;

  const paginationActiveItem = (index) => {
    const paginationItems = document.querySelectorAll('.pagination__bar-item');

    paginationItems.forEach(item => {
      item.classList.remove('pagination__bar-item_active');
    });

    paginationItems[index].classList.add('pagination__bar-item_active');
  };

  btns[0].addEventListener('click', e => {
    if (currentCount > 0 && currentCount <= maxCount) {
      currentCount--;
      paginationActiveItem(currentCount);
    }
  });
  
  btns[1].addEventListener('click', e => {
    if (currentCount >= 0 && currentCount < maxCount - 1) {
      currentCount++;
      paginationActiveItem(currentCount);
    }
  });
}