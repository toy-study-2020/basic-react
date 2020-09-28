import React, { useState } from 'react';
import styled from 'styled-components';
import InputText from './component/InputText';
import InputLabel from './component/InputLabel';
import InputSelect from './component/InputSelect';

const Container = styled.div`
  padding: 20px;
  border: 1px solid #eaeaea;
`;

function App() {
  const yearFuc = (num) => {
    let current = new Date().getFullYear(),
        yearArr = [];
    
    for (let i = current - num; i <= current; i++) {
      yearArr.push(i + '년');  
    }

    return yearArr;
  }

  const monthFuc = () => {
    let monthArr = [];

    for (let i = 1; i <= 12; i++) {
      monthArr.push(i + '월');  
    }

    return monthArr;
  }
  
  const dayFuc = () => {
    let dayArr = [];

    for (let i = 1; i <= 31; i++) {
      dayArr.push(i + '일');  
    }

    return dayArr;
  }
  
  const inputObj = {
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
  const {name, email, gender, year, month, day} = inputObj;

  const [user, setUser] = useState({
    name: {
      value: '',
      display: true
    },
    email: {
      value: '',
      display: true
    },
    gender: {
      value: '',
      display: true
    },
    year: {
      value: '',
      display: true
    },
    month: {
      value: '',
      display: true
    },
    day: {
      value: '',
      display: true
    }
  });

  const onChangeEvt = e => {
    let toggleDisplay = (e.target.value !== '') ? true : false;

    setUser({
      ...user,
      [e.target.id]: {
        value: e.target.value,
        display: toggleDisplay
      }
    });
  }

  const submitEvt = e => {
    e.preventDefault();
    let state = '';

    // Object.keys(user).map(key => {
    //   if (user[key].value !== '') return;

    //   state += 
    //     `"${key}": {
    //       value: '',
    //       display: false
    //     }`
    // });
   
    // const targetArr = `"${state}"`;

    // JSON.parse(targetArr);

    // setUser({
    //   ...user,
    //   targetArr
    // });

    Object.keys(user).map(key => {
      if (user[key].value === '') {
        state += 
          `${key},`;
      }
    });

    if (state !== '') {
      alert(state + '입력하지 않았습니다');
    } else {
      console.log(user)
    }
  }

  return (
    <form>
      <Container>
        <InputText id={name.id} title={name.title} error={name.error} display={user.name.display} onChangeEvt={onChangeEvt}></InputText>
        <InputText id={email.id} title={email.title} error={email.error} display={user.email.display} onChangeEvt={onChangeEvt}></InputText>
        
        <div className='inputBx selBx'>
          <InputLabel id={gender.id} title={gender.title} required={gender.required}></InputLabel>
          <InputSelect id={gender.id} arr={gender.valueArr} onChangeEvt={onChangeEvt}></InputSelect>
        </div>
        
        <div className='inputBx selBx'>
          <InputLabel id={year.id} title='생년월일' required={year.required}></InputLabel>
          <InputSelect id={year.id} arr={year.valueArr} title={year.title} onChangeEvt={onChangeEvt} display={user.year.display} error={year.error}></InputSelect>
          <InputSelect id={month.id} arr={month.valueArr} title={month.title} onChangeEvt={onChangeEvt} display={user.month.display} error={month.error}></InputSelect>
          <InputSelect id={day.id} arr={day.valueArr} title={day.title} onChangeEvt={onChangeEvt} display={user.day.display} error={day.error}></InputSelect>
        </div>

        <button type="submit" onClick={submitEvt} className="btnResist">등록</button>
      </Container>
    </form>
  );
}

export default App;
