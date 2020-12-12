import {
  URL,
  HEADERS,
  ELEMENTS_CLASS,
  TOGGLE_CLASS,
  MAGIC_NUMBER
} from './constants.js';
import {
  docSelector,
  createEl,
  insertEl,
  toggleClassMethod
} from './method.js';

const {LOADING, POSTS, BTN, ADD_FORM} = ELEMENTS_CLASS;
const {HIDDEN} = TOGGLE_CLASS;
const {MAX_POST} = MAGIC_NUMBER;

const loading = docSelector({el: LOADING});
const articleEl = docSelector({el: POSTS});
const btnAdd = docSelector({el: BTN.ADD});

const addForm = docSelector({el: ADD_FORM.WRAP});
const titleForm = addForm.querySelector(ADD_FORM.TITLE);
const authorForm = addForm.querySelector(ADD_FORM.AUTHOR);
const descriptionForm = addForm.querySelector(ADD_FORM.DESCRIPTION);

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
    type: type,
    id: id
  }) => {
    const response = await fetch(`${URL}/${type}/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      await console.log(FETCH.getDB());
    }
  }
};

const {
  postDB: post,
  getDB: read,
  updateDB: update,
  deleteDB: del
} = FETCH;


const fetchData = async _ => {
  await loading.classList.add(HIDDEN);
  return await read();
};

const setUI = ({
  data: data,
  limit: limit,
  insertPosition: position
}) => {
  data
    .reverse()
    .filter(posts => posts.id > limit)
    .map(val => {
      const {id, title, author} = val;
      const post = createEl({tag: 'li'});
      post.dataset.index = id;
      post.innerHTML = `
        <span class="indexWrap">
          <span class="index">${id}</span>
          <a 
            href="#"
            class="titleWrap">
            <span class="title">${title}</span>  
          </a>
        </span>
        <span class="author">${author}</span>
      `;
      insertEl({
        target: articleEl,
        position: position,
        element: post
      });
  });
};

};


const init = async _ => {
  const initialData = await fetchData();
  await console.log(initialData);
  await setUI({
    data: initialData,
    limit: initialData.length - MAX_POST,
    insertPosition: 'beforeend'
  });
}

if (document.readyState === 'complete') {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init);
}