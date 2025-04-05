export const container = (child, classList) => {
  const containerElem = document.createElement('div');
  containerElem.classList.add('container');
  if (classList) {
    containerElem.classList.add(classList);
  }

  containerElem.insertAdjacentHTML('afterbegin', child);
  return containerElem;
}