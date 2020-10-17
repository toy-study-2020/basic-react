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
	padding-bottom: 5px;
	padding-bottom: 25px;
	text-align: left;
	font-weight: ${props => props.theme.$normalWeight}};
`;

export const BrandArea = styled.div`
	text-align: center;
	padding-bottom: 35px;
`;

export const LstBrand = styled.ul`
	display: inline-block;
	font-size: 0;
`;

export const LstBrandItem = styled.li`
	margin: 0 10px;
	display: inline-block;
`;

export const ThumbImg = styled.div`
	overflow: hidden;
	width: 120px;
	height: 120px;
	border-radius: 50%;
`;

export const Img = styled.img`
	width: 100%;
`;

export const Name = styled.div`
	padding-top: 15px;
	font-size: 14px;
	font-weight: ${props => props.theme.$boldWeight};
`;