const URL = `http://localhost:3030`;
const HEADERS = {'Content-type': 'application/json; charset=UTF-8'};

const ELEMENTS_CLASS = {
  LOADING: '.loading',
  POSTS: '.posts',
  BTN: {
    ADD: '.btnAdd',
    DELETE: '.btnDelete',
    MODIFY: '.btnModify'
  }
};

const MAGIC_NUMBER = {
  MAX_POST: 20
};

export {
  URL,
  HEADERS,
  ELEMENTS_CLASS,
  MAGIC_NUMBER
};