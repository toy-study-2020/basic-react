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

export const LstNav = styled.ul`
	&:after {
		content: '';
		display: block;
		clear: both;
	}
`;

export const LstItem = styled.li`
	float: left;
	margin-left: 55px;
	height: 54px;
	font-size: 15px;
	line-height: 54px;
	&:first-child {
		margin-left: 0;
	}
`;

export const MainNav = styled.div`
	float: left;
	height: 54px;
`;

export const ServiceNav = styled.div`
	float: right;
	height: 54px;
`;
