import React, {useEffect, useState} from 'react';
import {JOIN_DEFAULT} from './constants/constants';
import FormMember from './components/FormMember';
import './style/style.scss';

const Join = () => {
  const {NAME, BIRTH, GENDER, MAIL} = JOIN_DEFAULT;
  const MEMBER_RESET = {
    name: NAME.DEFAULT,
    year: BIRTH.DEFAULT,
    month: BIRTH.DEFAULT,
    day: BIRTH.DEFAULT,
    gender: GENDER.DEFAULT,
    mail: MAIL.DEFAULT
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
    if (!member.value.name) return alert(`${NAME.TITLE}을 입력하세요`);
    if (member.value.year === 'default' || member.value.month === 'default' || member.value.day === 'default') return alert(`${TEXT.BIRTH.TITLE}을 입력하세요`);
    if (!member.value.gender) return alert(`${GENDER.TITLE}을 입력하세요`);

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
    target.name.value = NAME.DEFAULT;
    target.year.value = BIRTH.DEFAULT;
    target.month.value = BIRTH.DEFAULT;
    target.day.value = BIRTH.DEFAULT;
    target.gender.value = GENDER.DEFAULT;
    target.mail.value = MAIL.DEFAULT;
  };

  return (
    <div className="formMember">
      <form name="signMember" onSubmit={onSubmit}>
        <FormMember
          type={NAME}
          check={checkValue}
          value={member.value.name}/>
        <FormMember
          type={BIRTH}
          check={checkValue}
          value={[
            member.value.year,
            member.value.month,
            member.value.day
          ]}/>
        <FormMember
          type={GENDER}
          check={checkValue}
          value={member.value.gender}
        />
        <FormMember
          type={MAIL}
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

export default Join;
