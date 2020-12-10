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

const btnCreate = docSelector({el: '.btnCreate'});
const btnUpdate = docSelector({el: '.btnUpdate'});
btnCreate.addEventListener('click', async _ => {
  await post({
    type: 'posts',
    title: '테스트 타이틀',
    author: '테스트 작성자'
  })
});

btnUpdate.addEventListener('click', async _ => {
  await update({
    type: 'posts',
    id: 2,
    title: '수정된 타이틀',
    author: '수정된 작성자'
  })
});


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