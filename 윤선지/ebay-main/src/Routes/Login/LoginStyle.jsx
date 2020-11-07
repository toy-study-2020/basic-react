import styled, {css} from 'styled-components';

export const InnerLayout = styled.div`
	width: 1250px;
	margin: 0 auto;
	&:after {
		content: '';
		display: block;
		clear: both;
	}
`;

export const InputBx = styled.div`
    position: relative;
    padding: 0 20px 30px 120px;

    ${props => 
        props.selBx && 
        css`
           display: flex;
        `
      }
`;

export const BtnResist = styled.button`
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 50px;
    background: #2D2F3F;
    border: 0;
    font-size: 16px;
    color: #fff;
`;