import React, { useContext, useState } from "react";
import styled from "styled-components";
import clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
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

    Customer.authenticate(payload, (err, res) => {
      if (err) {
        console.error(err.code);
        return;
      }
      const data = res.data;
      localStorage.setItem("customerUid", data.customer);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
      isAuthenticated();
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
      <Title>로그인</Title>
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
        <p>
          Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일
          주소입니다.
        </p>
        <LoginSubmit type="submit">로그인</LoginSubmit>
        <Link to="register">Apple ID가 없다면 지금 생성하세요.</Link>
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

export default LoginPage;
