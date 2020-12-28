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
const btnAdd = docSelector({el: `.buttonWrap ${ADD}`});

const addForm = docSelector({el: WRAP});
const titleForm = addForm.querySelector(TITLE);
const authorForm = addForm.querySelector(AUTHOR);
const descriptionForm = addForm.querySelector(DESCRIPTION);

const FETCH = {
  async postDB ({
    type,
    title,
    author,
    desc
  }) {
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
  async getDB ({type}) {
    if (!type) return;
    const response = await fetch(`${URL}/${type}`);
    if (response.ok) return await response.json();
  },
  async updateDB ({
    type,
    id,
    body
  }) {
    const {title, author} = body;
    const desc = body?.desc;
    const response = await fetch(`${URL}/${type}`, {
      method: 'PATCH',
      body: JSON.stringify({
        id,
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
  async deleteDB ({
    type,
    id
  }) {
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

const fetchData = async ({type}) => {
  return await read({type});
};

const setUI = ({
  data,
  min,
  max,
  index: isIndex = false,
  insertPosition: position,
  target: wrapEl
}) => {
  if (data.length === 0) {
    return noPost({target: postEl, type: 'post'});
  } else {
    const noPost = postEl.querySelector(NO_POST);
    noPost?.classList.add(HIDDEN);
    noPost?.remove();
  }

  data
    .reverse()
    .filter((posts, index) => isIndex ? index >= min && index < max : posts.id > min && posts.id <= max)
    .map(val => {
      const {id, title, author} = val;
      const post = createEl({
        tag: 'li',
        attribute: {
          className: 'post'
        }
      });
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
    }).join('');
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

    const prevData = {
      title: target.querySelector('input').value,
      description: target.querySelector('textarea')?.value
    };

    Object.freeze(prevData);

    btn.addEventListener('click', _ => {
      onClickButton({target, btnText, prevData});
    });
  }
};

const onClickButton = ({target, btnText, prevData}) => {
  const elements = {
    title: target.querySelector('input'),
    author: target.querySelector(AUTHOR.replace('#', '.')),
    description: target.querySelector('textarea'),
    toggleClass: 'modify'
  };

  if (btnText === 'CONFIRM') {
    const currentData = {
      title: elements.title.value,
      description: elements.description?.value
    };

    if (JSON.stringify(prevData) === JSON.stringify(currentData)) {
      return alert(`변경 내역이 없습니다.`);
    }
  }

  modifyMethod[btnText.toLocaleLowerCase()]({
    target,
    elements,
    prevData
  });
}

const modifyMethod = {
  modify ({target, elements}) {
    target.classList.add(elements.toggleClass);
    elements.title.readOnly = false;
    if (elements.description) {
      elements.description.readOnly = false;
    }
  },
  async confirm ({target, elements}) {
    const modifyData = {
      id: target.dataset.index,
      title: elements.title.value,
      author: elements.author.textContent,
      desc: elements.description?.value
    };

    const {id, title, author, desc} = modifyData;
    const isPost = modifyData.desc !== null && typeof modifyData.desc !== 'undefined';

    const body = isPost ? {title, author, desc} : {title, author};
    const type = isPost ? 'posts' : 'comments';
    const path = isPost ? `posts/${id}` : `comments/${id}`;

    await update({
      id,
      body,
      type: path
    });

    await loading.classList.remove(HIDDEN);

    const nextElement =
      await target.nextElementSibling
        ? target.nextElementSibling
        : isPost
        ? postEl
        : target.closest('ul');
    const position = await target.nextElementSibling ? 'beforebegin' : 'beforeend';

    const data = await fetchData({type});

    if (isPost) {
      await target.classList.add(HIDDEN);
      const max = id;
      await setUI({
        data: data,
        min: max - ONE,
        max,
        insertPosition: position,
        target: nextElement
      });
      await target.remove();
    } else {
      await target.classList.add(HIDDEN);
      const max = id;
      await setCommentUI({
        data,
        target: nextElement,
        min: max - ONE,
        max,
        insertPosition: position
      });
      await target.remove();
    }
    await loading.classList.add(HIDDEN);
  },
  cancel () {
    const modifyPost = postEl.querySelector('.modify');
    if (!modifyPost) return;
    modifyPost.classList.remove('modify');
    modifyPost.querySelector('input').readOnly = true;
    if (modifyPost.querySelector('textarea')) {
      modifyPost.querySelector('textarea').readOnly = true;
    }
  },
  async delete ({target}) {
    const id = target.dataset.index;
    const type = target.classList.contains('comment') ? 'comments' : 'posts';
    const msg = confirm('삭제하시겠습니까?');
    if (msg) {
      await loading.classList.remove(HIDDEN);
      await del({
        type,
        id
      });

      const data = await fetchData({type});
      if (data.length === 0) noPost({
        target: target.closest('ul'), type: type.replace('s', '')
      });
      await target.classList.add(HIDDEN);
      await loading.classList.add(HIDDEN);
      await target.remove();
    }
  }
};

const setComment = async ({
  target
}) => {
  const postId = target.dataset.index;
  const data = await fetchData({type: `posts/${postId}/comments`});
  const filterData = data.filter(comment => Number(comment.postId) === Number(postId));
  const commentWrap = createEl({
    tag: 'div',
    attribute: {
      className: 'commentWrap'
    }
  });
  commentWrap.innerHTML = `
    <strong>COMMENT</strong>
    <div class="addComment">
      <label 
        title="댓글"
        class="title">
        <input
          type="text"
          name="title"
          placeholder="댓글"
          autocomplete="off">
      </label>
      <label
        title="작성자"
        class="author">
        <input
          type="text"
          name="author"
          placeholder="작성자"
          autocomplete="off">
      </label>
      <button 
        type="button"
        class="btnAdd">
        ADD
      </button>
    </div>
    <ul class="comments"></ul>
  `;

  const comments = commentWrap.querySelector('.comments');
  const titleForm = commentWrap.querySelector('input[name="title"]');
  const authorForm = commentWrap.querySelector('input[name="author"]');
  const btnAddComment = commentWrap.querySelector(ADD);

  await insertEl({
    target: target.querySelector(DESCRIPTION_ELEMENT),
    position: 'beforeend',
    el: commentWrap
  })
  await setCommentUI({
    data: filterData,
    target: comments
  });


  btnAddComment.addEventListener('click', _ => {
    const commentData = {
      title: titleForm.value,
      author: authorForm.value
    };

    addComment({
      type: 'comments',
      commentData,
      target: comments
    })
  });
};

const setCommentUI = ({
  data,
  min = 0,
  max = data.length + ONE,
  insertPosition: position = 'afterbegin',
  target
}) => {
  if (data.length === 0) {
    noPost({target, type: 'comment'});
  } else {
    data
      .reverse()
      .filter(comment => comment.id > min && comment.id <= max)
      .map(val => {
        const {id, title, author} = val;
        const comment = createEl({
          tag: 'li',
          attribute: {
            className: 'comment'
          }
        });

        comment.dataset.index = id;
        comment.innerHTML = `
          <span class="title">
            <input 
              type="text" 
              value="${title}"
              readonly>
          </span>
          <span class="author">${author}</span>
          <div class="buttonWrap">
            <ul class="buttons"></ul>
          </div>
        `;

        insertEl({
          target,
          position,
          el: comment
        });

        setButtons({target: comment});
      }).join('');
  }
};

const formClear = _ => {
  titleForm.value = '';
  descriptionForm.value = '';
  authorForm.value = '';
};

const noPost = ({target, type}) => {
  const noPost = createEl({
    tag: 'li',
    attribute: {
      className: 'no'
    }
  });

  noPost.textContent = type === 'post' ? '게시글이 없습니다.' : '댓글이 없습니다.';
  insertEl({
    target,
    position: 'afterbegin',
    el: noPost
  });
}

const addPost = async ({
  type
}) => {

  const postData = {
    type: type,
    title: titleForm.value,
    desc: descriptionForm.value,
    author: authorForm.value
  };

  const nullData = Object.keys(postData).filter(key => postData[key] === '');
  if (nullData.length > 0) {
    return alert(`${nullData.map(form => form.toUpperCase()).join(', ')} 채워주세요.`)
  }

  loading.classList.remove(HIDDEN);
  await post(postData);

  const data = await fetchData({type: 'posts'});
  const max = data[data.length - ONE].id;

  await setUI({
    data: data,
    min: max - ONE,
    max: max,
    insertPosition: 'afterbegin'
  });

  await loading.classList.add(HIDDEN);
  await formClear();
};

const addComment = async ({
  type,
  commentData,
  target
}) => {
  const nullData = Object.keys(commentData).filter(key => commentData[key] === '');
  if (nullData.length > 0) {
    return alert(`${nullData.map(form => form.toUpperCase()).join(', ')} 채워주세요.`);
  }

  console.log(commentData);

  loading.classList.remove(HIDDEN);
  await post({
    type,
    commentData
  });

  const data = await fetchData({type: 'comments'});
  const max = data[data.length - ONE].id;

  await setCommentUI({
    data: data,
    min: max - ONE,
    max: max,
    insertPosition: 'afterbegin',
    target
  });

  await loading.classList.add(HIDDEN);
};


const toggleDescription = ({target}) => {
  const post = target.closest('li');
  const description = post.querySelector(DESCRIPTION_ELEMENT);
  const isOpen = description.classList.contains('hidden');
  const isComment = description.classList.contains('isComment');
  const method = isOpen ? 'remove' : 'add';

  modifyMethod.cancel();

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

  if (isOpen && !isComment) {
    description.classList.add('isComment');
    setComment({
      target: post
    });
  }
};

const onClickPost = e => {
  e.preventDefault();
  let target = e.target;
  while (target !== undefined && target.parentNode) {
    if (target.tagName === 'INPUT') {
      if (target.closest('li').classList.contains('modify') || target.closest('li').classList.contains('comment')) return;
      return toggleDescription({target: target});
    }
    target = target.parentNode;
  }
};

btnAdd.addEventListener('click', _ => {
  modifyMethod.cancel();
  addPost({type: 'posts'})
    .then(_ => {
      toggleClassAll({
        el: DESCRIPTION_ELEMENT,
        methodType: 'add',
        toggleClass: HIDDEN
      });
    });
});

postEl.addEventListener('click', onClickPost);

const infinityScroll = (intersectionObserver, firstIndex) => {
  const post = postEl.querySelectorAll(POST);
  const minIndex = Number(post[post.length - ONE].dataset.index);
  post.forEach(el => {
    if (!el.nextSibling && firstIndex < minIndex) {
      intersectionObserver.observe(el);
    } else if (minIndex === firstIndex) {
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
      const entriesIndex = await entries[0].target.dataset.index - ONE;
      const data = await fetchData({type: 'posts'});
      await setUI({
        data: data,
        min: entriesIndex - MAX_POST,
        max: entriesIndex,
        insertPosition: 'beforeend'
      });
      await loading.classList.add(HIDDEN);
      await infinityScroll(observe, data[data.length - ONE].id);
    }
  });
}, observerOption);

const setCount = ({data}) => {
  const index = {
    max: 0,
    min: 0
  };
  if (data.length === 0) return index;
  index.max = data.length - ONE > MAX_POST ? MAX_POST : data.length + ONE;
  index.min = 0;
  return index;
};

const init = async _ => {
  const initialData = await fetchData({type: 'posts'});
  const index = await setCount({data: initialData});
  await setUI({
    data: initialData,
    min: index.min,
    max: index.max,
    index: true,
    insertPosition: 'beforeend'
  });

  await loading.classList.add(HIDDEN);

  if (index.max !== 0) {
    await infinityScroll(io, index.max);
  }
};

if (document.readyState === 'complete') {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init);
}