import React from 'react';
import FormInput from '../../components/Form/FormInput';
import { FormBoxStyles, FormSubmitButtonStyles, FormTitleStyles, FormWrapStyles } from '../../components/Form/FormStyles';
import { LOGIN_OPTS } from '../../constant/constant';
import { IntervalSection } from '../../GlobalStyles';

const LoginPresenter = ({state}) => {
  const {TITLE, EMAIL, PASSWORD} = LOGIN_OPTS
  const {values, changeValuesHandler, submitValuesHandler} = state

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