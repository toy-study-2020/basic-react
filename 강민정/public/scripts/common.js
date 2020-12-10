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
  postDB: async ({
    type: type,
    title: title,
    author: author
  }) => {
    const response = await fetch(`${URL}/${type}`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        author: author
      }),
      headers: HEADERS
    });
    if (response.ok) {
      await response.json();
      await console.log(response);
    }
  },
  getDB: async _ => {
    const response = await fetch(`${URL}/posts`);
    if (response.ok) return await response.json();
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