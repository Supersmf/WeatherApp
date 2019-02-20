const buildElement = (type, parent, inrHtml, className, attribute, event) => {
  const element = document.createElement(type);

  if (inrHtml) {
    element.innerHTML = inrHtml;
  }
  if (className) {
    element.classList.add(className);
  }
  if (attribute) {
    element.setAttribute(attribute.name, attribute.content);
  }
  if (event) {
    element.addEventListener('click', event);
  }
  if (parent) {
    parent.appendChild(element);
  } else {
    return element;
  }
  return null;
};

const getDomElement = str => document.querySelector(str);

const getAllDomElement = str => document.querySelectorAll(str);

export {
  buildElement,
  getDomElement,
  getAllDomElement,
};
