import React from 'react';
import {Link} from 'react-router-dom';
import './Gnb.scss';

function Gnb() {
  return (
    <div className="gnbArea">
		<div className="innerLayout">
			<Link to={`/`} class="logoAuction" aria-label="Auction"></Link>
	
			<div className="gnbMenu">
				<div className="listMenu">
					<Link to={`/login`} className="btnLogin">로그인</Link>
					<Link to={`/`} className="btnJoin">회원가입</Link>
				</div>
				<Link to={`/`} className="infoUse">이베이 쇼핑 이용안내</Link>
			</div>
		</div>
    </div>
  );
}

export default Gnb;
