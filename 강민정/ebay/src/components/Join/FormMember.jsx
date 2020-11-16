import React, { useContext } from 'react';
import { CheckMethod } from '../../routes/Join/JoinContainer';
import InputForm from '../InputForm';

const FormMember = () => {
  const {onSubmit} = useContext(CheckMethod);
  return (
    <form onSubmit={onSubmit}>
      <InputForm type='name'/>
      <InputForm type='nick'/>
      <InputForm type='gender'/>
      <InputForm type='mail'/>
      <button
        type="submit"
        className="buttonSubmit">
        등록
      </button>
    </form>
  );
};

export default FormMember;
