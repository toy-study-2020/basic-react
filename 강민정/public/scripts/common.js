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
  toggleClassMethod,
  toggleClassAll
} from './method.js';

const {LOADING, POSTS, DESCRIPTION_ELEMENT, BTN, ADD_FORM} = ELEMENTS_CLASS;
const {WRAP, TITLE, AUTHOR, DESCRIPTION} = ADD_FORM;
const {HIDDEN} = TOGGLE_CLASS;
const {MAX_POST} = MAGIC_NUMBER;
const {ADD, DELETE, MODIFY, CONFIRM} = BTN;

const loading = docSelector({el: LOADING});
const postEl = docSelector({el: POSTS});
const btnAdd = docSelector({el: ADD});

const addForm = docSelector({el: WRAP});
const titleForm = addForm.querySelector(TITLE);
const authorForm = addForm.querySelector(AUTHOR);
const descriptionForm = addForm.querySelector(DESCRIPTION);

const changeURL = ({
  parameter: param,
  method: method
}) => {
  const state = { 'page_id': 1, 'user_id': 5 }
  const title = '';
  const url = `./index.html?${param}`;

  history[method](state, title, url)
};

const FETCH = {
  postDB: async ({
    type: type,
    title: title,
    author: author,
    desc: desc
  }) => {
    const response = await fetch(`${URL}/${type}`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        author: author,
        desc: desc
      }),
      headers: HEADERS
    });
    if (response.ok) {
      await response.json();
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
        <div class="titleInfoWrap">
          <span class="index">${id}</span>
          <span class="titleWrap">
            <span class="title">
              <input 
                type="text"
                name="title"
                value="${title}"
                readonly
                title="제목">
            </span>
          </span>  
          <span class="authorWrap">
            <span class="author">${author}</span>
          </span>
        </div>
        <div class="descriptionInfoWrap hidden">
          <div class="description">
            <textarea
              title="내용"
              name="description"
              rows="10"
              readonly>${val.desc ? val.desc : '내용이 없습니다.'}</textarea>
          </div>
          <div class="buttonWrap">
            <ul>
              <li>
                <button
                  type="button"
                  class="btnModify"
                  data-index="${id}">
                  MODIFY
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btnConfirm"
                  data-index="${id}">
                  CONFIRM
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btnDelete"
                  data-index="${id}">
                  DELETE
                </button>
              </li>
            </ul>
          </div>
        </div>
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
  };

  await post(postData);

  const data = await fetchData();
  await setUI({
    data: data,
    min: data.length - 1,
    max: data.length,
    insertPosition: 'afterbegin'
  });

  await loading.classList.add(HIDDEN);
  await formClear();
};

const postEvent = e => {
  e.preventDefault();
  let target = e.target;
  while (target !== undefined && target.parentNode) {
    if (target.tagName === 'INPUT') {
      return toggleDescription({target: target});
    }

    if (target.tagName === 'BUTTON') {
      const funcName = target.className === BTN.MODIFY ? 'postModify' : 'postDelete';
      [funcName]();
    }
    target = target.parentNode;
  }
};

const toggleDescription = ({target: target}) => {
  const link = target.closest('li');
  const description = link.querySelector(DESCRIPTION_ELEMENT);
  const method = description.classList.contains('hidden') ? 'remove' : 'add';
  const postNumber = method === 'remove' ? link.dataset.index : 'all';

  toggleClassAll({
    el: DESCRIPTION_ELEMENT,
    methodType: 'add',
    toggleClass: HIDDEN
  });

  toggleClassMethod({
    el: description,
    methodType: method,
    toggleClass: HIDDEN
  });

  changeURL({
    parameter: `posts=${postNumber}`,
    method: 'pushState'
  })
};

btnAdd.addEventListener('click', _ => {
  addPost({type: 'posts'});
});

postEl.addEventListener('click', postEvent);

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

const init = async _ => {
  const initialData = await fetchData();
  await setUI({
    data: initialData,
    min: initialData.length - MAX_POST,
    max: initialData.length,
    insertPosition: 'beforeend'
  });

  await loading.classList.add(HIDDEN);

  changeURL({
    parameter: 'posts=all',
    method: 'replaceState'
  });
  infinityScroll(io);
};

if (document.readyState === 'complete') {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init);
}