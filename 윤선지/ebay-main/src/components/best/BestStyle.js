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

export const AreaTitle = styled.div`
	font-size: 24px;
	padding-top: 35px;
	padding-bottom: 25px;
	font-weight: ${props => props.theme.$normalWeight}};
`;

export const BestHotdealArea = styled.div`
  padding-bottom: 35px;
  background: #fff;
`;

export const LstBest = styled.ul`
  margin: 0 -20px;
  &:after {
    display: block;
    clear: both;
    content: "";
  }
`;

export const LstBestItem = styled.li`
  float: left;
  width: 33.3%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const ItemBest = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.$silver};
  background: ${props => props.theme.$white};
`;

export const PrdFlag = styled.div`
  position: absolute;
  top: 0;
  left: -1px;
  width: 64px;
  border: 1px solid ${props => props.theme.$silver};
`;

export const Flag = styled.div`
  width: 100%;
  height: 64px;
  padding-top: 15px;
  box-sizing: border-box;
  background: ${props => props.theme.$white};
  text-align: center;
  font-size: 12px;
  font-weight: ${props => props.theme.$boldWeight};
  ${props => 
    props.percent && 
    css`
      color: ${props => props.theme.$white};
      background: red;
    `
  }
`;

export const Num = styled.span`
  font-size: 20px;
`;

export const PrdThumb = styled.div`
  overflow: hidden;
  width: 100%;
  height: 236px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const PrdInfo = styled.div`
  padding: 15px 10px;
`;

export const SimpleTit = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: ${props => props.theme.$boldWeight};
  &:after {
    display: block;
    clear: both;
    content: "";
  }
`;

export const Price = styled.div`
  margin-top: 16px;
  &:after {
    display: block;
    clear: both;
    content: "";
  }
`;

export const Original = styled.div`
  float: left;
  position: relative;
  line-height: 24px;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.$black};
  }
  &:only-child {
    float: right;
    margin-top: -2px;
    font-size: 24px;
    line-height: 1;
    color: #ff2234;
    &:before {
        display: none;
    }
  }
`;

export const Sale = styled.div`
  float: right;
  margin-top: sz(-2);
  font-size: 24px;
  line-height: 1;
  color: #ff2234;
`;











