export const paginationData = (data, size) => {
  const paginationItems = [];

  for (let i = 0; i < data.length; i+= size) {
    paginationItems.push(data.slice(i, i + size));
  }
  
  return paginationItems;
}