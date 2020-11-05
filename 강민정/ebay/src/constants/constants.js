const PATH = 'https://baekcode.github.io/APIs/';

const INITIAL_API = {
  menu: {},
  store: {},
  best: {},
  exhibition: {},
  product: {}
};

const JOIN_INITIAL_VALUE = {
  name: '',
  nick: '',
  gender: '',
  mail: ''
};

const JOIN_INITIAL_METHOD = {};

const JOIN_TITLE = {
  name: '이름',
  nick: '닉네임',
  gender: '성별',
  mail: '이메일'
}

const JOIN_MSG = {
  DEFAULT: '필수 입력정보 입니다.',
  CLEAR: '입력이 완료되었습니다.'
};

export {
  PATH,
  INITIAL_API,
  JOIN_INITIAL_VALUE,
  JOIN_INITIAL_METHOD,
  JOIN_TITLE,
  JOIN_MSG
}

