import React, { useContext } from 'react';
import InputText from './InputText';
import InputLabel from './InputLabel';
import InputSelect from './InputSelect';
import styled from 'styled-components';
import { LoginInputObj } from '../../constants/Constants';
import { DataConText } from './LoginContainer';

const Container = styled.div`
    padding: 20px;
    border: 1px solid #eaeaea;
`;

function LoginPresenter() {
  const {name, email, gender, year, month, day} = LoginInputObj;
  const { user, yearValueArr, monthValueArr, dayValueArr, submitEvt } = useContext(DataConText);
  
  return (
    <form>
        <Container>
            <InputText id={name.id} title={name.title} error={name.error} display={user.name.display}></InputText>
            <div className='inputBx selBx'>
                <InputLabel id={gender.id} title={gender.title} required={gender.required}></InputLabel>
                <InputSelect id={gender.id} arr={gender.valueArr}></InputSelect>
            </div>
            <InputText id={email.id} title={email.title} error={email.error} display={user.email.display}></InputText>
            <div className='inputBx selBx'>
                <InputLabel id={year.id} title='생년월일' required={year.required}></InputLabel>
                <InputSelect id={year.id} arr={yearValueArr} title={year.title} display={user.year.display} error={year.error}></InputSelect>
                <InputSelect id={month.id} arr={monthValueArr} title={month.title} display={user.month.display} error={month.error}></InputSelect>
                <InputSelect id={day.id} arr={dayValueArr} title={day.title} display={user.day.display} error={day.error}></InputSelect>
            </div>
            <button type="submit" onClick={submitEvt} className="btnResist">등록</button>
        </Container>
    </form>
  );
}

export default LoginPresenter;
