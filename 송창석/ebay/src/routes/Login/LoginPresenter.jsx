import React, { useContext } from 'react';
import FormInput from '../../components/Form/FormInput';
import { FormBoxStyles, FormSubmitButtonStyles, FormTitleStyles, FormWrapStyles } from '../../components/Form/FormStyles';
import { IntervalSection } from '../../GlobalStyles';
import { ConstantContext, LoginContext } from './LoginContainer';

const LoginPresenter = () => {
    const {TITLE, EMAIL, PASSWORD} = useContext(ConstantContext)
    const {values, changeValuesHandler, submitValuesHandler} = useContext(LoginContext)

    return (
        <FormWrapStyles>
            <IntervalSection>
                <FormTitleStyles>{TITLE}</FormTitleStyles>
                <form onSubmit={(event) => submitValuesHandler(event, EMAIL, PASSWORD)}>
                    <FormBoxStyles>
                        <label>{EMAIL.LABEL}</label>
                        <FormInput
                            name={EMAIL.NAME}
                            type={EMAIL.TYPE}
                            value={values[EMAIL]}
                            changeValuesHandler={changeValuesHandler}
                        />
                    </FormBoxStyles>
                    <FormBoxStyles>
                        <label>{PASSWORD.LABEL}</label>
                        <FormInput
                            name={PASSWORD.NAME}
                            type={PASSWORD.TYPE}
                            value={values[PASSWORD]}
                            changeValuesHandler={changeValuesHandler}
                        />
                    </FormBoxStyles>
                    <FormSubmitButtonStyles className={"submit"}>{TITLE}</FormSubmitButtonStyles>
                </form>
            </IntervalSection>
        </FormWrapStyles>
    );
};

export default LoginPresenter;