export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateUniqueId = () => {
  return Math.floor(Math.random() * Date.now());
};

export const getDateTime = () => {
  const current = new Date();
  const date =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  const time =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
};