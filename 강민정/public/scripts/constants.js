const URL = `http://localhost:3030`;
const HEADERS = {'Content-type': 'application/json; charset=UTF-8'};

const ELEMENTS_CLASS = {
  LOADING: '.loading',
  POSTS: '.posts',
  DESCRIPTION_ELEMENT: '.descriptionInfoWrap',
  BUTTON_ELEMENT: '.buttons',
  BTN: {
    ADD: '.btnAdd',
    DELETE: '.btnDelete',
    MODIFY: '.btnModify',
    CONFIRM: '.btnConfirm',
    CANCEL: '.btnCancel'
  },
  ADD_FORM: {
    WRAP: '.addForm',
    TITLE: '#title',
    AUTHOR: '#author',
    DESCRIPTION: '#description'
  }
};

const TOGGLE_CLASS = {
  HIDDEN: 'hidden'
}

const MAGIC_NUMBER = {
  MAX_POST: 20
};

export {
  URL,
  HEADERS,
  ELEMENTS_CLASS,
  TOGGLE_CLASS,
  MAGIC_NUMBER
};