// let rendered = false;

// export const main = () => {
//   if (rendered) {
//     return document.querySelector('main');
//   }

//   const mainElem = document.createElement('main');
//   mainElem.classList.add('main');

//   document.body.append(mainElem);
//   rendered = true;
  
//   return mainElem;
// }

export const main = () => document.querySelector('main');