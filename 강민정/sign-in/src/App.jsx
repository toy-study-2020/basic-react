import React, {useEffect, useState} from 'react';
import {TEXT_DATA} from './constants/constants';
import FormMember from './components/FormMember';
import './style/style.scss';

const App = () => {
  const TEXT = TEXT_DATA;
  const MEMBER_RESET = {
    name: `${TEXT.NAME.DEFAULT}`,
    year: `${TEXT.BIRTH.DEFAULT}`,
    month: `${TEXT.BIRTH.DEFAULT}`,
    day: `${TEXT.BIRTH.DEFAULT}`,
    gender: `${TEXT.GENDER.DEFAULT}`,
    mail: ''
  };

  const [member, setMember] = useState({
    value: MEMBER_RESET,
    list: []
  });

  useEffect (() => {
    console.log(member.list);
    localStorage.setItem('member', JSON.stringify(member.list));
  }, [member.list]);

  const onSubmit = e => {
    e.preventDefault();
    const memberValue = member.value;
    if (!member.value.name) return alert(`${TEXT.NAME.TITLE}을 입력하세요`);
    if (member.value.year === 'default' || member.value.month === 'default' || member.value.day === 'default') return alert(`${TEXT.BIRTH.TITLE}을 입력하세요`);
    if (!member.value.gender) return alert(`${TEXT.GENDER.TITLE}을 입력하세요`);

    setMember({
      value: MEMBER_RESET,
      list: [...member.list, memberValue],
    });

    clearForm(e.target);
  };

  const checkValue = e => {
    const target = e.target;
    const value = target.value;
    setMember({
      ...member,
      value: {
        ...member.value,
        [target.name]: value,
      }
    });
  };

  const clearForm = (target) => {
    target.name.value = `${TEXT.NAME.DEFAULT}`;
    target.year.value = `${TEXT.BIRTH.DEFAULT}`;
    target.month.value = `${TEXT.BIRTH.DEFAULT}`;
    target.day.value = `${TEXT.BIRTH.DEFAULT}`;
    target.gender.value = `${TEXT.GENDER.DEFAULT}`;
    target.mail.value = `${TEXT.MAIL.DEFAULT}`;
  };

  return (
    <div className="formMember">
      <form name="signMember" onSubmit={onSubmit}>
        <FormMember
          type={TEXT.NAME}
          check={checkValue}
          value={member.value.name}/>
        <FormMember
          type={TEXT.BIRTH}
          check={checkValue}
          value={[
            member.value.year,
            member.value.month,
            member.value.day
          ]}/>
        <FormMember
          type={TEXT.GENDER}
          check={checkValue}
          value={member.value.gender}
        />
        <FormMember
          type={TEXT.MAIL}
          check={checkValue}
          value={member.value.mail}
        />
        <button
          type="submit"
          className="buttonSubmit">
          등록
        </button>
      </form>
    </div>
  );
}

export default App;
