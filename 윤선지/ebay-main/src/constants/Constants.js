import {yearFuc, monthFuc, dayFuc} from '../utils/utils';

export const LoginInputObj = {
    name: {
      id: 'name',
      title: '이름',
      required: true,
      error: '이름을 정확히 입력해주세요'
    },
    email: {
      id: 'email',
      title: '이메일',
      required: true,
      error: '이메일 정확히 입력해주세요'
    },
    gender: {
      id: 'gender',
      title: '성별',
      required: false,
      error: '성별을 정확히 입력해주세요',
      valueArr: ['남', '여']
    },
    year: {
      id: 'year',
      title: '년',
      required: true,
      error: '년 입력하시오!',
      valueArr: yearFuc(150)
    },
    month: {
      id: 'month',
      title: '월',
      required: true,
      error: '월 입력하시오!',
      valueArr: monthFuc()
    },
    day: {
      id: 'day',
      title: '일',
      required: true,
      error: '일 입력하시오!',
      valueArr: dayFuc()
    }
};
