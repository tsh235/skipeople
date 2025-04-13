export const localStarageSave = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const localStarageLoad = key => JSON.parse(localStorage.getItem(key)) || [];