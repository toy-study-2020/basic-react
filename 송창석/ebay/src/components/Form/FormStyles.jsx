import styled from 'styled-components';

const FormWrapStyles = styled.div`
    padding: 50px 0;
    form {
        width: 50%;
    }
`

const FormTitleStyles = styled.h3`
    margin-bottom: 20px;
    font-size: 24px;
    color: #222;
`

const FormBoxStyles = styled.div`
    margin: 20px 0;
    padding-left: 20px;
    font-size: 0;
    > * {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
    label {
        width: 100px;
    }
    div {
        width: calc(100% - 100px);
        input {
            width: 100%;
        }
        select {
            width: calc(33.3% - 10px);
        }
    }
    
    input,
    select {
        padding: 4px 8px;
        outline: none;
        border: 1px solid #222;
        border-radius: 0;
        & + input,
        & + select {
            margin-left: 10px;
        }
    }
    
`

const FormSubmitButtonStyles = styled.button`
    min-width: 100px;
    padding: 4px 8px;
    line-height: 30px;
    font-size: 15px;
    font-weight: bold;
    &.submit {
        color: #fff;
        background-color: #1D4CD8;
    }
    &.cancel {
        color: #222;
        background-color: #ddd;
    }
`

export {
    FormWrapStyles,
    FormTitleStyles,
    FormBoxStyles,
    FormSubmitButtonStyles
}