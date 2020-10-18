import React from 'react';
import { useReducer } from 'react';
import FormBox from './components/Form/FormBox';
import FormInput from './components/Form/FormInput';
import FormSelect from './components/Form/FormSelect';
import { FORM_OPTS } from './constant/constant.js';

const initialState = {
    name: "",
    nickname: "",
    gender: "",
    email: ""
}

const reducer = (state, action) => {
    switch(action.type) {
        case "updateFormValues": {
            return {
                ...state,
                [action.name]: action.value
            }
        }
        case "reset": {
            return initialState;
        }
        default: {
            return state
        }
    }
}

function App() {
    const {USERNAME, NICKNAME, GENDER, EMAIL} = FORM_OPTS
    
    const [FormValues, dispathFormValues] = useReducer(reducer, initialState);
    const onChangeFormHandler = (e) => dispathFormValues({type: "updateFormValues", name: e.target.name, value: e.target.value});

    const onSubmitFormHandler = (e) => {
        e.preventDefault();
        const infoArr = [];
        if(FormValues.name === "") infoArr.push(USERNAME.LBL)
        if(FormValues.nickname === "") infoArr.push(NICKNAME.LBL)
        if(FormValues.gender === "") infoArr.push(GENDER.LBL)
        if(FormValues.email === "") infoArr.push(EMAIL.LBL)
        if(infoArr.length > 0) alert(`${infoArr.map(it => it)}을 확인해주세요.`)
        else dispathFormValues({type: "reset"})
    }


    return (
        <>
            <ul>
                <li>이름: {FormValues.name}</li>
                <li>별명: {FormValues.nickname}</li>
                <li>성별: {FormValues.gender}</li>
                <li>이메일: {FormValues.email}</li>
            </ul>
            <form onSubmit={onSubmitFormHandler}>
                <FormBox
                label={USERNAME.LBL}
                FormComponent={
                    <FormInput
                    name={USERNAME.NAME}
                    type={USERNAME.TYPE}
                    value={FormValues.name}
                    onChangeFormHandler={onChangeFormHandler}
                    />
                }
                />
                <br/>
                <FormBox
                label={NICKNAME.LBL}
                FormComponent={
                    <FormInput
                    name={NICKNAME.NAME}
                    type={NICKNAME.TYPE}
                    value={FormValues.nickname}
                    onChangeFormHandler={onChangeFormHandler}
                    />
                }
                />
                <br/>
                <FormBox
                label={GENDER.LBL}
                FormComponent={
                    <FormSelect
                    name={GENDER.NAME}
                    options={GENDER.OPTS}
                    value={FormValues.gender}
                    onChangeFormHandler={onChangeFormHandler}
                    />
                }
                />
                <br/>
                <FormBox
                label={EMAIL.LBL}
                FormComponent={
                    <FormInput
                    name={EMAIL.NAME}
                    type={EMAIL.TYPE}
                    value={FormValues.email}
                    onChangeFormHandler={onChangeFormHandler}
                    />
                }
                />
                <button type={"submit"}>등록</button>
            </form>
        </>
    );
}

export default App;
