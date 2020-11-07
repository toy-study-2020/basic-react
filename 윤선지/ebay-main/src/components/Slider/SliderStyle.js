import styled from 'styled-components';

export const Slide = styled.div`
    position: relative;
    text-align: center;
    background-color: ${props => props.color};
`;

export const SlideImg = styled.img`
    margin: 0 auto;
`;

export const SlideInfo = styled.div`
    position: absolute;
    width: 1250px;
    top: 0;
    left: 50%;
    bottom: 0;
    margin-left: -625px;
    text-align: left;
    padding-left: 30px;
    box-sizing: border-box;
`;

export const SubTitle = styled.div`
    font-size: 1.5em;
    color: #000;
    margin-top: 100px;
    font-weight: 500;
`;

export const Title = styled.div`
    font-size: 36px;
    color: #000;
    margin-top: 5px;
    font-weight: 600;
`;
