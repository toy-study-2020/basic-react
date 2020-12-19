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

const {LOADING, POSTS, POST, DESCRIPTION_ELEMENT, BUTTON_ELEMENT, BTN, ADD_FORM, NO_POST} = ELEMENTS_CLASS;
const {WRAP, TITLE, AUTHOR, DESCRIPTION} = ADD_FORM;
const {HIDDEN} = TOGGLE_CLASS;
const {MAX_POST, ONE} = MAGIC_NUMBER;
const {ADD, DELETE, MODIFY, CANCEL, CONFIRM} = BTN;

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
  const state = null
  const title = null;
  const url = `${param}`;

  history[method](state, title, url)
};

const FETCH = {
  postDB: async ({
    type,
    title,
    author,
    desc
  }) => {
    const response = await fetch(`${URL}/${type}`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        author,
        desc
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
    type,
    id,
    title,
    author,
    desc
  }) => {
    const response = await fetch(`${URL}/${type}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
        author,
        desc
      }),
      headers: HEADERS
    });
    if (response.ok) {
      await response.json();
    }
  },
  deleteDB: async ({
    type,
    id
  }) => {
    const response = await fetch(`${URL}/${type}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      console.error('can not delete');
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
  data,
  min,
  max,
  insertPosition: position,
  target: wrapEl
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
                autocomplete="off"
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
            <ul class="buttons">
            </ul>
          </div>
        </div>
      `;
      insertEl({
        target: typeof wrapEl === 'undefined' ? postEl : wrapEl,
        position: position,
        el: post
      });

      setButtons({
        target: post
      });
    });
};

const setButtons = ({target}) => {
  const buttonEl = target.querySelector(BUTTON_ELEMENT);
  const buttons = {
    btnModify: MODIFY,
    btnConfirm: CONFIRM,
    btnCancel: CANCEL,
    btnDelete: DELETE
  };

  for (const [key, value] of Object.entries(buttons)) {
    const btnWrap = createEl({tag: 'li'});
    const btnClass = value.replace('.', '');
    const btnText = btnClass.replace('btn', '').toUpperCase();
    const btn = createEl({
      tag: 'button',
      attribute: {
        type: 'button',
        className: btnClass
      }
    });

    btn.textContent = btnText;
    btnWrap.append(btn);

    insertEl({
      target: buttonEl,
      position: 'beforeend',
      el: btnWrap
    });

    btn.addEventListener('click', _ => {
      const elements = {
        title: target.querySelector('input'),
        author: target.querySelector(AUTHOR.replace('#', '.')),
        description: target.querySelector('textarea'),
        toggleClass: 'modify'
      };

      modifyMethod[btnText.toLocaleLowerCase()]({
        target,
        elements
      });
    });
  }
}

const formClear = _ => {
  titleForm.value = '';
  descriptionForm.value = '';
  authorForm.value = '';
}

const addPost = async ({
  type
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

const toggleDescription = ({target}) => {
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

const modifyMethod = {
  modify: ({target, elements}) => {
    target.classList.add(elements.toggleClass);
    elements.title.readOnly = false;
    elements.description.readOnly = false;
  },
  confirm: async ({target, elements}) => {
    const modifyData = {
      type: 'posts',
      id: target.dataset.index,
      title: elements.title.value,
      author: elements.author.textContent,
      desc: elements.description.value
    };

    const {type, id, title, author, desc} = modifyData;

    await update({
      type,
      id,
      title,
      author,
      desc
    });

    await loading.classList.remove(HIDDEN);

    const nextElement = await target.nextElementSibling ? target.nextElementSibling : postEl;
    const position = await target.nextElementSibling ? 'beforebegin' : 'beforeend';

    const data = await fetchData();
    await target.classList.add(HIDDEN);
    await setUI({
      data: data,
      min: id - 1,
      max: id,
      insertPosition: position,
      target: nextElement
    });
    await target.remove();
    await postEl.querySelector(`li[data-index="${id}"] .descriptionInfoWrap`).classList.remove(HIDDEN);
    await loading.classList.add(HIDDEN);
  },
  cancel: ({target, elements}) => {
    target.classList.remove(elements.toggleClass);
    elements.title.readOnly = true;
    elements.description.readOnly = true;
  },
  delete: ({target}) => {
    console.log('delete')
  }
};

const onClickPost = e => {
  e.preventDefault();
  let target = e.target;
  while (target !== undefined && target.parentNode) {
    if (target.tagName === 'INPUT') {
      if (target.closest('li').classList.contains('modify')) return;
      return toggleDescription({target: target});
    }
    target = target.parentNode;
  }
};

btnAdd.addEventListener('click', _ => {
  addPost({type: 'posts'});
});

postEl.addEventListener('click', onClickPost);

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