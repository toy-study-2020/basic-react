import React, { useContext } from 'react';
import { LoginConText } from '../../App';
import InputText from '../../components/InputItem/InputText.js';
import InputLabel from '../../components/InputItem/InputLabel.js';
import InputSelect from '../../components/InputItem/InputSelect.js';
import { InnerLayout, InputBx, BtnResist } from './LoginStyle';

function LoginPresenter() {
    const { values, onSubmitEvt, onChangeEvt } = useContext(LoginConText);

    return (
        <form>
            <InnerLayout>
                <InputBx>
                    <InputLabel name="name"></InputLabel>
                    <InputText name="name" onChangeEvt={onChangeEvt} display={values['name'].display}></InputText>
                </InputBx>

                <InputBx selBx>
                    <InputLabel name="gender"></InputLabel>
                    <InputSelect name="gender" onChangeEvt={onChangeEvt} display={values['gender'].display}></InputSelect>
                </InputBx>

                <InputBx>
                    <InputLabel name="email"></InputLabel>
                    <InputText name="email" onChangeEvt={onChangeEvt} display={values['email'].display}></InputText>
                </InputBx>
                
                <InputBx selBx>
                    <InputLabel name="year" labelTitle='생년월일'></InputLabel>
                    <InputSelect name="year" onChangeEvt={onChangeEvt} display={values['year'].display}></InputSelect>
                    <InputSelect name="month" onChangeEvt={onChangeEvt} display={values['month'].display}></InputSelect>
                    <InputSelect name="day" onChangeEvt={onChangeEvt} display={values['day'].display}></InputSelect>
                </InputBx>

                <BtnResist type="submit" onClick={onSubmitEvt}>등록</BtnResist>
            </InnerLayout>
        </form>
    );
}

export default LoginPresenter;
