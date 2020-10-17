import React from 'react';
import styled from 'styled-components';

const LoginWrap = styled.div`
  border: 2px solid red;
  height: 600px;
  padding: 30px 0;
  text-align: center;
  font-size: 40px;
`;

function Login() {
  return (
    <LoginWrap>
      로그인
    </LoginWrap>
  );
}

export default Login;
