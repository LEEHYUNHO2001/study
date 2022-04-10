import React, { useState } from "react";
import styled from "styled-components";
import clayful from "clayful/client-js";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8)
      return alert("비밀먼호는 8자리 이상이어야 합니다.");
    const Customer = clayful.Customer;
    const payload = {
      email,
      password,
    };

    Customer.createMe(payload, (err, res) => {
      if (err) console.log(err.code);
      const data = res.data;
      console.log(data);
    });
  };
  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <LoginForm onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          placeholder="Apple ID"
          type="email"
          name="email"
          value={email}
        />
        <input
          onChange={handlePassword}
          placeholder="Password"
          type="password"
          name="password"
          value={password}
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
