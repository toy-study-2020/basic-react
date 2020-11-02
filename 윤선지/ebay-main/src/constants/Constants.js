export const LoginInputObj = {
    name: {
      id: 'name',
      title: '이름',
      required: true,
      error: '이름을 정확히 입력하세요'
    },
    email: {
      id: 'email',
      title: '이메일',
      required: true,
      error: '이메일 정확히 입력하라고!!!'
    },
    gender: {
      id: 'gender',
      title: '성별',
      required: false,
      error: '오류!!! 성별을 정확히 입력하시오!',
      valueArr: ['남', '여']
    },
    year: {
      id: 'year',
      title: '년',
      required: true,
      error: '년 입력하시오!'
    },
    month: {
      id: 'month',
      title: '월',
      required: true,
      error: '월 입력하시오!'
    },
    day: {
      id: 'day',
      title: '일',
      required: true,
      error: '일 입력하시오!'
    }
};