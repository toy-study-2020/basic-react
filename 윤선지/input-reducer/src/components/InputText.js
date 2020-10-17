import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
    border: 1px solid silver;   
`;

const Input = styled.input`
    width: 100%;
    padding: 5px 30px;
    box-sizing: border-box;
    background: none;
    border: 0;
    font-size: 20px;
    line-height: 30px;
`;

function InputText(props) {
    const { onChange, name } = props;

    return (
        <InputBox>
            <Input type="text" onChange={onChange} name={name}></Input>
        </InputBox>
    );
}

export default InputText;
