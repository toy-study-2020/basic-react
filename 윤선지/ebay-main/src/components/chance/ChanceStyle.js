import styled from 'styled-components';

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

export const LstChance = styled.ul`
    margin: 0 -20px;
    &:after {
		content: '';
		display: block;
		clear: both;
	}
`;

export const LiChance = styled.li`
    float: left;
    width: 33.3%;
    padding: 0 20px;
    margin-top: 10px;
    box-sizing: border-box;
`;

export const ItemChance = styled.div`
    position: relative;
    background: $white;
    border: 1px solid ${props => props.theme.$silver};
`;

export const ThumbImg = styled.div`
    overflow: hidden;
    height: 200px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const ItemInfo = styled.div`
    padding: 15px 10px;
`;

export const Percent = styled.div`
    color: red;
    font-size: 24px;
    line-height: 1;
`;

export const Name = styled.div`
    font-size: 15px;
    font-weight: ${props => props.theme.$boldWeight};
`;

export const Price = styled.div`
    margin-top: 16px;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

export const Original = styled.span`
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

export const Sale = styled.span`
    float: right;
    margin-top: -2px;
    font-size: 24px;
    line-height: 1;
    color: #ff2234;
`;

export const BadgeArea = styled.div`
    position: absolute;
    top: 0;
    left: -1px;
`;

export const ItemBadge = styled.div`
    width: 64px;
    height: 64px;
    border: 1px solid ${props => props.theme.$silver};
    background: ${props => props.theme.$white};
    text-align: center;
    font-size: 12px;
    font-weight: ${props => props.theme.$boldWeight};
    box-sizing: border-box;
    color: ${props => props.theme.$white};
    &:first-child {
        background: red;
    }
    &:first-child + div {
        background: ${props => props.theme.$white};
        color: ${props => props.theme.$black};
    }
`;







