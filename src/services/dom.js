const creatElement = (type, parent, inrHtml, className, attribute) => {
  const element = document.createElement(type);
  if (inrHtml) element.innerHTML = inrHtml;
  if (className) element.classList.add(className);
  if (attribute) element.setAttribute(attribute.name, attribute.content);
  if (parent) {
    parent.appendChild(element);
  } else {
    return element;
  }
  return null;
};

export {
  creatElement
};
