import {
  URL,
  HEADERS,
  ELEMENTS_CLASS,
} from './constants.js';
import {
  docSelector,
  createEl,
  insertEl,
  toggleClassMethod
} from './method.js';

const {LOADING, POSTS, BTN} = ELEMENTS_CLASS;
const loading = docSelector({el: LOADING});
const articleEl = docSelector({el: POSTS});
const btnAdd = docSelector({el: BTN.ADD});

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
    const response = await fetch(`${URL}/${type}/${id}`, {
      method: 'PUT',
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
  deleteDB: async ({
    id: id
  }) => {
    console.log(id)
  }
};

const {
  postDB: post,
  getDB: read,
  updateDB: update,
  deleteDB: del
} = FETCH;



const setUI = async _ => {
  const db = await read();
  console.log(db);

  await db.map(val => {
    const {id, title, author} = val;
    const post = createEl({tag: 'div'});
    post.textContent = `${id}, ${title}, ${author}`;

    insertEl({
      target: docSelector({el: 'body'}),
      element: post
    })
  }).join('');
};

const init = _ => {
  setUI();

}
if (document.readyState === 'complete') {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init);
}