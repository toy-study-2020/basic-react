import styled, {css} from 'styled-components';

export const errorText = styled.div`
    display: none;
    color: #ED1C24;

	${props => 
        props.on && 
        css`
            display: block;
        `
      }
`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    font-size: 16px;
    line-height: 40px;

    ${props => 
        props.required && 
        css`
          color: #ED1C24;
        `
      }
`;

export const InputTextArea = styled.div`
    border: 1px solid #ddd; 
`;

export const InputTextUnit = styled.input`
    padding: 0 20px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    box-sizing: border-box;
    border: 0;
`;

export const InputSelectArea = styled.div`
    flex: 1;
`;

export const InputSelectUnit = styled.select`
    border: 1px solid #ddd;
    padding: 0 20px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    box-sizing: border-box;
`;