import React from 'react';
import { useContext } from 'react';
import FormInput from '../../components/Form/FormInput';
import FormSelect from '../../components/Form/FormSelect';
import { FormBoxStyles, FormSubmitButtonStyles, FormTitleStyles, FormWrapStyles } from '../../components/Form/FormStyles';
import { JOIN_OPTS } from '../../constant/constant';
import { IntervalSection } from '../../GlobalStyles';
import { UserJoinContext } from './UserJoinContainer';

const UserJoinPresenter = () => {
  const { TITLE, NAME, EMAIL, PASSWORD, GENDER, BIRTH, YEAR, MONTH, DAY } = JOIN_OPTS
  const {values, changeValuesHandler, submitValuesHandler} = useContext(UserJoinContext)

  return (
    <FormWrapStyles>
      <IntervalSection>
        <FormTitleStyles>{TITLE}</FormTitleStyles>
        <form onSubmit={(event) => submitValuesHandler(event, NAME, EMAIL, PASSWORD, GENDER, YEAR, MONTH, DAY)}>
          <FormBoxStyles>
            <label>{NAME.LABEL}</label>
            <FormInput
              name={NAME.NAME}
              type={NAME.TYPE}
              value={values[NAME]}
              changeValuesHandler={changeValuesHandler}
            />
          </FormBoxStyles>
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
          <FormBoxStyles>
            <label>{GENDER.LABEL}</label>
            <FormSelect
              name={GENDER.NAME}
              arr={GENDER.OPTIONS}
              value={values[GENDER]}
              label={GENDER.LABEL}
              changeValuesHandler={changeValuesHandler}
            />
          </FormBoxStyles>
          <FormBoxStyles>
            <label>{BIRTH.LABEL}</label>
            <FormSelect
              name={YEAR.NAME}
              arr={YEAR.OPTIONS}
              value={values[YEAR]}
              label={YEAR.LABEL}
              changeValuesHandler={changeValuesHandler}
            />
            <FormSelect
              name={MONTH.NAME}
              arr={MONTH.OPTIONS}
              value={values[MONTH]}
              label={MONTH.LABEL}
              changeValuesHandler={changeValuesHandler}
            />
            <FormSelect
              name={DAY.NAME}
              arr={DAY.OPTIONS}
              value={values[DAY]}
              label={DAY.LABEL}
              changeValuesHandler={changeValuesHandler}
            />
          </FormBoxStyles>
          <FormSubmitButtonStyles className={"submit"}>{TITLE}</FormSubmitButtonStyles>
        </form>
      </IntervalSection>
    </FormWrapStyles>
  );
};

export default UserJoinPresenter;