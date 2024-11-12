export const getErrorElement = (id, message) => {
  const element = document.getElementById(id);
  element.innerText = message;
};
