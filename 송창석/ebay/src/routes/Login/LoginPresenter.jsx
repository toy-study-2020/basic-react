import React from 'react';
import FormInput from '../../components/Form/FormInput';
import { FormBoxStyles, FormSubmitButtonStyles, FormTitleStyles, FormWrapStyles } from '../../components/Form/FormStyles';
import { LOGIN_OPTS } from '../../constant/constant';
import { IntervalSection } from '../../GlobalStyles';

const LoginPresenter = ({values, onChange, onSubmit}) => {
  const {TITLE, EMAIL, PASSWORD} = LOGIN_OPTS

  return (
    <FormWrapStyles>
      <IntervalSection>
        <FormTitleStyles>{TITLE}</FormTitleStyles>
        <form onSubmit={(event) => onSubmit(event, EMAIL, PASSWORD)}>
          <FormBoxStyles>
            <label>{EMAIL.LABEL}</label>
            <FormInput
              name={EMAIL.NAME}
              type={EMAIL.TYPE}
              value={values[EMAIL]}
              changeValuesHandler={onChange}
            />
          </FormBoxStyles>
          <FormBoxStyles>
            <label>{PASSWORD.LABEL}</label>
            <FormInput
              name={PASSWORD.NAME}
              type={PASSWORD.TYPE}
              value={values[PASSWORD]}
              changeValuesHandler={onChange}
            />
          </FormBoxStyles>
          <FormSubmitButtonStyles className={"submit"}>{TITLE}</FormSubmitButtonStyles>
        </form>
      </IntervalSection>
    </FormWrapStyles>
  );
};

export default LoginPresenter;