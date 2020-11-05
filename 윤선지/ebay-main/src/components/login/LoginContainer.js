import React, { useState } from 'react';
import { yearFuc, monthFuc, dayFuc } from '../../utils/utils';
import LoginPresenter from './LoginPresenter';
import './InputText.scss';
export const DataConText = React.createContext();

function LoginContainer() {
    const yearValueArr = yearFuc(150);
    const monthValueArr = monthFuc();
    const dayValueArr = dayFuc();
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

        Object.keys(user).map(key => {
            if (user[key].value !== '') return;

            if (key !== 'name' ){
                state += `,`;
            } 

            state += `"${key}":{"value":"","display":false}`;

        });
        let targetArr = `'{${state}}'`;
        console.log(targetArr + '')
    
       
        const test = JSON.parse(targetArr+'');
        //console.log('test' + test);
        // console.log('before' + targetArr)

        setUser({
            ...user,
            ...test
        });

        // Object.keys(user).map(key => {
        // if (user[key].value === '') {
        //     state += 
        //     `${key},`;
        // }
        // });

        // if (state !== '') {
        // alert(state + '입력하지 않았습니다');
        // } else {
        // console.log(user)
        // }
    }

    return (
        <DataConText.Provider value={{user, onChangeEvt, submitEvt, yearValueArr, monthValueArr, dayValueArr}}>
            <LoginPresenter></LoginPresenter>
        </DataConText.Provider>
    );
}

export default LoginContainer;
