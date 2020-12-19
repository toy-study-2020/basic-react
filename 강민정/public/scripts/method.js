const docSelector = ({
  el,
  all: isAll
}) => {
  if (isAll) return document.querySelectorAll(el);
  else return document.querySelector(el);
};

const createEl = ({tag, attribute}) => {
  const el = document.createElement(tag);
  Object.assign(el, attribute);
  return el;
};

const insertEl = ({
  target,
  position: pos = 'beforebegin',
  el
}) => {
  target.insertAdjacentElement(pos, el);
}

const toggleClassMethod = ({
  el: el,
  methodType: methodType,
  toggleClass: toggleClass
}) => {
  el.classList[methodType](toggleClass);
};

const toggleClassAll = ({
  el,
  methodType,
  toggleClass
}) => {
  const elements = docSelector({el, all: true});
  elements.forEach(element => {
    element.classList[methodType](toggleClass);
  })
};
}

export {
  docSelector,
  createEl,
  insertEl,
  toggleClassMethod,
  toggleClassAll
}