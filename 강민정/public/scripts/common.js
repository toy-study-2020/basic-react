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
const postEl = docSelector({el: POSTS});
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
  min: min,
  max: max,
  insertPosition: position
}) => {
  data
    .reverse()
    .filter(posts => posts.id > min && posts.id <= max)
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
        target: postEl,
        position: position,
        element: post
      });
    });
};

const formClear = _ => {
  titleForm.value = '';
  descriptionForm.value = '';
  authorForm.value = '';
}

const addPost = async ({
  type: type
}) => {
  loading.classList.remove(HIDDEN);

  const postData = {
    type: type,
    title: titleForm.value,
    desc: descriptionForm.value,
    author: authorForm.value
  }

  await post(postData);

  const data = await fetchData();
  setUI({
    data: data,
    min: data.length - 1,
    max: data.length,
    insertPosition: 'afterbegin'
  });

  await loading.classList.add(HIDDEN);
  await formClear();
};

const infinityScroll = intersectionObserver => {
  const post = postEl.querySelectorAll('li');
  post.forEach(el => {
    const postIndex = Number(el.dataset.index);
    if (!el.nextSibling && postIndex > 1) {
      intersectionObserver.observe(el);
    } else if (postIndex <= 1) {
      intersectionObserver.disconnect();
    }
  });
};

const observerOption = {
  threshold: 0
};

const io = new IntersectionObserver((entries, observe) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      loading.classList.remove(HIDDEN);
      const entriesIndex = await entries[0].target.dataset.index - 1;
      await setUI({
        data: await fetchData(),
        min: entriesIndex - MAX_POST,
        max: entriesIndex,
        insertPosition: 'beforeend'
      });
      await loading.classList.add(HIDDEN);
      await infinityScroll(observe);
    }
  });
}, observerOption);

btnAdd.addEventListener('click', _ => {
  addPost({type: 'posts'});
});

const init = async _ => {
  const initialData = await fetchData();
  await setUI({
    data: initialData,
    min: initialData.length - MAX_POST,
    max: initialData.length,
    insertPosition: 'beforeend'
  });

  infinityScroll(io);
};

if (document.readyState === 'complete') {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init);
}