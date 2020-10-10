import React, { useState } from 'react';
import { IntervalSection } from '../../GlobalStyles';
import { JOIN_OPTS } from '../../constant/constant';
import { FormWrapStyles, FormTitleStyles, FormSubmitButtonStyles } from '../Form/FormStyles'
import FormBox from '../Form/FormBox';
import FormInput from '../Form/FormInput';
import FormSelect from '../Form/FormSelect';

const UserJoin = () => {
    const { TITLE, NAME, EMAIL, PASSWORD, GENDER, BIRTH } = JOIN_OPTS;
    const [UserValue, setUserValue] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        year: "",
        month: "",
        day: ""
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
        if(UserValue.name === "") infoArr.push(NAME.LABEL)
        if(UserValue.email === "") infoArr.push(EMAIL.LABEL)
        if(UserValue.password === "") infoArr.push(PASSWORD.LABEL)
        if(UserValue.gender === "") infoArr.push(GENDER.LABEL)
        if(UserValue.year === "" || UserValue.month === "" || UserValue.day === "") infoArr.push(BIRTH.LABEL)
        if(infoArr.length > 0) alert(`${infoArr.map(it => it)}을 확인해주세요.`)
        else console.log(UserValue)
    }

    

    return (
        <FormWrapStyles>
            <IntervalSection>
                <FormTitleStyles>{TITLE}</FormTitleStyles>
                <form onSubmit={UserValueSubmitHandler}>
                    <FormBox
                        label={NAME.LABEL}
                        components={
                            <FormInput
                                name={NAME.NAME}
                                type={NAME.TYPE}
                                value={UserValue.name}
                                handleUserValue={handleUserValue}
                            />
                        }
                    />
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
                    <FormBox
                        label={GENDER.LABEL}
                        components={
                            <FormSelect
                                name={GENDER.NAME}
                                callback={GENDER.OPTIONS}
                                value={UserValue.gender}
                                handleUserValue={handleUserValue}
                            />
                        }
                    />
                    <FormBox
                        label={BIRTH.LABEL}
                        components={
                            BIRTH.SELECT.map(({NAME, OPTIONS}) => {
                                return (
                                    <FormSelect
                                        key={NAME}
                                        name={NAME}
                                        callback={OPTIONS}
                                        value={UserValue[NAME]}
                                        handleUserValue={handleUserValue}
                                    />
                                )
                            })
                        }
                    />
                    <FormSubmitButtonStyles className={"submit"}>{TITLE}</FormSubmitButtonStyles>
                </form>
            </IntervalSection>
        </FormWrapStyles>
    );
};

export default UserJoin;