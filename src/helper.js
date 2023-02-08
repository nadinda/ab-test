export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateUniqueId = () => {
  return Math.floor(Math.random() * Date.now());
};