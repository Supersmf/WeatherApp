const buildElement = (type, parent, inrHtml, className, attribute, event) => {
  let element = type;
  if (typeof element === 'string') {
    element = document.createElement(type);
  }
  if (inrHtml) {
    element.innerHTML = inrHtml;
  }
  if (className) {
    element.classList = className;
  }
  if (attribute) {
    element.setAttribute(attribute.name, attribute.content);
  }
  if (event) {
    element.addEventListener('click', event);
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
};

const getDomElement = str => document.querySelector(str);

const getDomElements = str => document.querySelectorAll(str);

export {
  buildElement,
  getDomElement,
  getDomElements,
};
