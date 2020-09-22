import React, {useEffect, useState} from 'react';
import { TEXT_DATA } from './constants/constants';
import FormMember from './components/FormMember';

const App = () => {
  const [member, setMember] = useState([]);

  useEffect (() => {
    if (member.length === 0) {
      return console.log('load');
    }
  }, [member]);

  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    checkValue();
    setMember([...member, e.target.value]);
    console.log(member);
  };

  const checkValue = () => {

  };

  return (
    <div className="formMember">
      <form onSubmit={onSubmit}>
        <FormMember type={TEXT_DATA.NAME} />
        <FormMember type={TEXT_DATA.BIRTH} />
        <FormMember type={TEXT_DATA.GENDER} />
        <FormMember type={TEXT_DATA.MAIL} />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default App;
