import React from "react";
import styled from "styled-components";

const RegisterPage = () => {
  return (
    <Container>
      <Title>회원가입</Title>
      <LoginForm>
        <input placeholder="Apple ID" type="email" name="email" value="" />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value=""
        />
        <LoginSubmit type="submit">회원가입</LoginSubmit>
        <Link to="login">이미 Apple ID가 있다면 바로 로그인 하세요.</Link>
      </LoginForm>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  font-weight: 700;
  margin-top: 30px;
  font-size: 40px;
`;
const LoginForm = styled.form`
  margin-top: 70px;
  max-width: 400px;
  & > input {
    max-width: 400px;
    border-color: #d2d2d7;
    width: 100%;
    height: 3.29412rem;
    border-radius: 12px;
    border-style: solid;
    margin-bottom: 0.82353rem;
    padding: 1.05882rem 0.94118rem;
  }
`;
const LoginSubmit = styled.button`
  background-color: #0071e3;
  color: #fff;
  font-size: 17px;
  line-height: 1.17648;
  min-width: 28px;
  padding: 18px 31px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
`;
const Link = styled.a`
  color: gray;
  text-decoration: none;
  margin-top: 10px;
  color: #06c;
`;

export default RegisterPage;
