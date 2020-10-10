import React, { useState } from 'react';
import {IntervalSection} from '../../GlobalStyles'
import { LOGIN_OPTS } from '../../constant/constant';
import { FormWrapStyles, FormTitleStyles, FormSubmitButtonStyles } from '../Form/FormStyles'
import FormBox from '../Form/FormBox';
import FormInput from '../Form/FormInput';

const Login = () => {
    const { TITLE, EMAIL, PASSWORD } = LOGIN_OPTS;
    const [UserValue, setUserValue] = useState({
        email: "",
        password: ""
    })

    const handleUserValue = (e) => {
        setUserValue({
            ...UserValue,
            [e.target.name]: e.target.value,
        })
    }

    const UserValueSubmitHandler = (event) => {
        event.preventDefault();

        const infoArr = [];
        if(UserValue.email === "") infoArr.push(EMAIL.LABEL)
        if(UserValue.password === "") infoArr.push(PASSWORD.LABEL)
        if(infoArr.length > 0) alert(`${infoArr.map(it => it)}을 확인해주세요.`)
        else console.log(UserValue)
    }
    
    return (
        <FormWrapStyles>
            <IntervalSection>
                <FormTitleStyles>{TITLE}</FormTitleStyles>
                <form onSubmit={UserValueSubmitHandler}>
                    <FormBox
                        label={EMAIL.LABEL}
                        components={
                            <FormInput
                                name={EMAIL.NAME}
                                type={EMAIL.TYPE}
                                value={UserValue.email}
                                handleUserValue={handleUserValue}
                            />
                        }
                    />
                    <FormBox
                        label={PASSWORD.LABEL}
                        components={
                            <FormInput
                                name={PASSWORD.NAME}
                                type={PASSWORD.TYPE}
                                value={UserValue.password}
                                handleUserValue={handleUserValue}
                            />
                        }
                    />
                    <FormSubmitButtonStyles className={"submit"}>{TITLE}</FormSubmitButtonStyles>
                </form>
            </IntervalSection>
        </FormWrapStyles>
        
    );
};

export default Login;