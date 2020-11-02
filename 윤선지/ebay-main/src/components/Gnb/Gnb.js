import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Gnb.scss';

const InnerLayout = styled.div`
	width: 1250px;
	margin: 0 auto;
	&:after {
		content: '';
		display: block;
		clear: both;
	}
`;

function Gnb() {
  return (
    <>
		<InnerLayout>
			<Link to={`/`} class="logoAuction" aria-label="Auction"></Link>
	
			<div className="GnbMenu">
				<div className="listMenu">
					<Link to={`/login`} className="btnLogin">로그인</Link>
					<Link to={`/`} className="btnJoin">회원가입</Link>
				</div>
				<Link to={`/`} className="infoUse">이베이 쇼핑 이용안내</Link>
			</div>
		</InnerLayout>
    </>
  );
}

export default Gnb;
