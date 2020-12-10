import {
  URL,
  HEADERS
} from './constants.js';
import {
  docSelector,
  createEl,
  insertEl,
  toggleClassMethod
} from './method.js';

const FETCH = {
  getDB: async _ => {
    const response = await fetch(`${URL}/posts`);
    if (response.ok) {
      return await response.json();
    }

  },
  postDB: async ({
    type: type,
    id: id,
    title: title,
    author: author
  }) => {
    console.log(type, id, title, author);
  },
  updateDB: async ({
    type: type,
    id: id,
    title: title,
    author: author
  }) => {
    console.log(type, id, title, author);
  },
  deleteDB: async ({
    id: id
  }) => {
    console.log(id)
  }
};

const { getDB, postDB, updateDB, deleteDB } = FETCH;

const init = async _ => {
  const db = await getDB();
  await console.log(db);
}
if (document.readyState === 'complete') {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init);
}