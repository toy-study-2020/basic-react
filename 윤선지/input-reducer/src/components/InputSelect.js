import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
    border: 1px solid silver;   
`;

const Input = styled.select`
    width: 100%;
    padding: 5px 30px;
    box-sizing: border-box;
    background: none;
    border: 0;
    font-size: 20px;
    line-height: 30px;
`;

function InputText(props) {
    const { onChange, name, options } = props;

    console.log(options);
    const optionList = list => {
        return list.map((item, idx) => {
            return (
                <option key={idx}>{item}</option>
            )
        })
    }

    return (
        <InputBox>
            <Input onChange={onChange} name={name}>
                {optionList(options)}
            </Input>
        </InputBox> 
    );
}

export default InputText;
